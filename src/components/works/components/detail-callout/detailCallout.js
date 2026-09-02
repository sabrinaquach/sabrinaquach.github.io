import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import "./detailCallout.css";

// A figure that marks a region on a wide view and links it to a zoomed detail
// beside it — the convention scientific figures use for "here is the whole
// thing, and here is the part worth looking at."
//
// It earns its place where a detail is too small to read at the width the wide
// shot needs — which is why it carries the scan-and-fix step rather than the
// set-the-scale one: the FIXED rows and the running count are illegible on a
// laptop shot scaled to fit a column.
//
// The two are separate recordings, not one clip cropped two ways. That is the
// honest arrangement for a screen capture: the marker says "this region", not
// "this exact frame, at this exact moment." Cut paired clips to the same
// duration so `loop` restarts them together — see the drift guard below.
//
// The detail sits on the LEFT and the wide view on the right, which inverts the
// usual context-then-detail order for a good reason: the marked region is on the
// left-hand side of the wide view, so a leader line drawn rightward would have to
// cross the whole screenshot to get anywhere. Pointing left, it leaves the frame
// immediately and crosses nothing.
//
// `marker` is the region to outline, in percentages of the wide media's own
// box, so it is measured once against the source video and then holds at every
// width. The leader line is measured at runtime instead — see below.
const DetailCallout = ({ wide, zoom, marker, caption, wideLabel, zoomLabel }) => {
  const rootRef = useRef(null);
  const markerRef = useRef(null);
  const zoomRef = useRef(null);
  const wideVideoRef = useRef(null);
  const zoomVideoRef = useRef(null);
  const [leader, setLeader] = useState(null);

  // The line runs from the marker's left edge to the zoom's right edge, and both
  // of those move with the column widths, the video aspect ratios and the
  // breakpoint. Hand-computed percentages would encode one particular layout
  // and quietly drift the moment any of the three changed, so the geometry is
  // measured from the real boxes instead.
  //
  // The viewBox is set to the measured pixel size, so SVG user units and CSS
  // pixels stay 1:1 — no non-uniform scaling, and therefore no stretched
  // stroke widths to correct for.
  const measure = useCallback(() => {
    const root = rootRef.current;
    const mark = markerRef.current;
    const zoomEl = zoomRef.current;
    if (!root || !mark || !zoomEl) return;

    const r = root.getBoundingClientRect();
    const m = mark.getBoundingClientRect();
    const z = zoomEl.getBoundingClientRect();

    // Stacked at the narrow breakpoint: the zoom sits above the wide view
    // rather than beside it, so the two overlap horizontally and there is no
    // gap for a line to cross.
    if (z.right > m.left || r.width === 0) {
      setLeader(null);
      return;
    }

    setLeader({
      w: r.width,
      h: r.height,
      x1: z.right - r.left,
      y1: (z.top + z.bottom) / 2 - r.top,
      x2: m.left - r.left,
      y2: (m.top + m.bottom) / 2 - r.top,
    });
  }, []);

  useLayoutEffect(() => {
    measure();

    const observer = new ResizeObserver(measure);
    [rootRef.current, markerRef.current, zoomRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [measure]);

  // Drift guard. The two clips are cut to the same duration, so native `loop`
  // restarts them together and that alone holds them in step — this only
  // catches the case where one stalls on load or a tab throttle skews its clock.
  //
  // Deliberately does nothing unless the durations match: on clips of different
  // lengths the same timestamp is not the same moment, and forcing one would be
  // worse than letting them run free.
  useEffect(() => {
    const a = wideVideoRef.current;
    const b = zoomVideoRef.current;
    if (!a || !b) return;

    const TOLERANCE = 0.4;

    const resync = () => {
      if (!a.duration || !b.duration) return;
      if (Math.abs(a.duration - b.duration) > TOLERANCE) return;
      if (b.seeking) return;
      if (Math.abs(a.currentTime - b.currentTime) > TOLERANCE) {
        b.currentTime = a.currentTime;
      }
    };

    a.addEventListener("timeupdate", resync);
    return () => a.removeEventListener("timeupdate", resync);
  }, []);

  // A video has no height until its metadata lands, so the first measure can
  // run against a collapsed box. Re-measuring on loadedmetadata catches that
  // without polling.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const videos = Array.from(root.querySelectorAll("video"));
    videos.forEach((v) => v.addEventListener("loadedmetadata", measure));
    return () => videos.forEach((v) => v.removeEventListener("loadedmetadata", measure));
  }, [measure]);

  return (
    <figure className="dc-figure">
      <div className="dc-callout" ref={rootRef}>
        <div className="dc-wide">
          <video ref={wideVideoRef} src={wide} loop muted autoPlay playsInline aria-label={wideLabel} />
          <span
            className="dc-marker"
            ref={markerRef}
            style={{
              left: `${marker.left}%`,
              top: `${marker.top}%`,
              width: `${marker.width}%`,
              height: `${marker.height}%`,
            }}
          />
        </div>

        <div className="dc-zoom" ref={zoomRef}>
          <video ref={zoomVideoRef} src={zoom} loop muted autoPlay playsInline aria-label={zoomLabel} />
        </div>

        {leader && (
          <svg
            className="dc-rays"
            viewBox={`0 0 ${leader.w} ${leader.h}`}
            width={leader.w}
            height={leader.h}
            aria-hidden="true"
          >
            <line className="dc-ray" x1={leader.x1} y1={leader.y1} x2={leader.x2} y2={leader.y2} />
          </svg>
        )}
      </div>
      {caption && <figcaption className="rc-caption">{caption}</figcaption>}
    </figure>
  );
};

export default DetailCallout;
