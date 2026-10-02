import React, { useEffect, useId, useRef } from "react";
import { gsap } from "gsap";
import "./stickerPeel.css";

/*
 * A peelable, draggable sticker — React Bits' <StickerPeel />
 * (reactbits.dev/animations/sticker-peel), adapted for the moodboard:
 *
 * - each sticker gets its own SVG filter ids (the original uses fixed ids, so
 *   several on one page would all render with the first one's filters);
 * - it's placed like everything else on the board, by % (x / y / w in the
 *   board's units), and dragging is confined to `boundsRef`;
 * - dragging is plain pointer events rather than GSAP Draggable: this site
 *   scrolls <body>, not the window, and Draggable folds the window's scroll
 *   into its maths, which flung stickers to the bottom of the board. Pointer
 *   deltas don't care what scrolls;
 * - sizes are in cqw, so stickers scale with the board.
 *
 * Hover (or touch) peels the top back to show the sticker's grey backing;
 * pressing peels it further. The lighting follows the pointer.
 */
const StickerPeel = ({
  imageSrc,
  label,
  boundsRef,
  x,
  y,
  w,
  rotate = 0,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  shadowIntensity = 0.45,
  lightingIntensity = 0.1,
  peelDirection = 0,
}) => {
  const id = useId().replace(/:/g, "");
  const dragRef = useRef(null);
  const containerRef = useRef(null);
  const pointLightRef = useRef(null);
  const pointLightFlippedRef = useRef(null);

  // Drag anywhere on the board, with a little tilt while it moves.
  useEffect(() => {
    const target = dragRef.current;
    if (!target) return undefined;

    let start = null;

    const onDown = (e) => {
      if (e.button !== 0) return;
      const bounds = (boundsRef?.current || target.parentNode).getBoundingClientRect();
      const box = target.getBoundingClientRect();
      start = {
        px: e.clientX,
        py: e.clientY,
        x: gsap.getProperty(target, "x"),
        y: gsap.getProperty(target, "y"),
        // How far the sticker can travel each way before leaving the board.
        minDx: bounds.left - box.left,
        maxDx: bounds.right - box.right,
        minDy: bounds.top - box.top,
        maxDy: bounds.bottom - box.bottom,
        lastX: e.clientX,
      };
      target.setPointerCapture(e.pointerId);
      target.classList.add("is-dragging");
    };

    const onMove = (e) => {
      if (!start) return;
      const dx = gsap.utils.clamp(start.minDx, start.maxDx, e.clientX - start.px);
      const dy = gsap.utils.clamp(start.minDy, start.maxDy, e.clientY - start.py);
      const rot = gsap.utils.clamp(-24, 24, (e.clientX - start.lastX) * 0.4);
      start.lastX = e.clientX;
      gsap.set(target, { x: start.x + dx, y: start.y + dy });
      gsap.to(target, { rotation: rot, duration: 0.15, ease: "power1.out" });
    };

    const onUp = (e) => {
      if (!start) return;
      start = null;
      if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
      target.classList.remove("is-dragging");
      gsap.to(target, { rotation: 0, duration: 0.8, ease: "power2.out" });
    };

    target.addEventListener("pointerdown", onDown);
    target.addEventListener("pointermove", onMove);
    target.addEventListener("pointerup", onUp);
    target.addEventListener("pointercancel", onUp);
    return () => {
      target.removeEventListener("pointerdown", onDown);
      target.removeEventListener("pointermove", onMove);
      target.removeEventListener("pointerup", onUp);
      target.removeEventListener("pointercancel", onUp);
    };
  }, [boundsRef]);

  // Specular highlight follows the pointer.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const updateLight = (e) => {
      const rect = container.getBoundingClientRect();
      const lx = e.clientX - rect.left;
      const ly = e.clientY - rect.top;
      gsap.set(pointLightRef.current, { attr: { x: lx, y: ly } });
      if (Math.abs(peelDirection % 360) !== 180) {
        gsap.set(pointLightFlippedRef.current, { attr: { x: lx, y: rect.height - ly } });
      } else {
        gsap.set(pointLightFlippedRef.current, { attr: { x: -1000, y: -1000 } });
      }
    };

    container.addEventListener("mousemove", updateLight);
    return () => container.removeEventListener("mousemove", updateLight);
  }, [peelDirection]);

  // Touch: peel while a finger is down.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const on = () => container.classList.add("touch-active");
    const off = () => container.classList.remove("touch-active");
    container.addEventListener("touchstart", on, { passive: true });
    container.addEventListener("touchend", off);
    container.addEventListener("touchcancel", off);
    return () => {
      container.removeEventListener("touchstart", on);
      container.removeEventListener("touchend", off);
      container.removeEventListener("touchcancel", off);
    };
  }, []);

  const f = (name) => `url(#${name}-${id})`;

  return (
    <div
      ref={dragRef}
      className="sp-draggable"
      data-cursor-text="PEEL & DRAG"
      data-cursor-icon="arrow"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        "--sp-width": `${w}cqw`,
        "--sp-rotate": `${rotate}deg`,
        "--sp-p": "0.6cqw",
        "--sp-peelback-hover": `${peelBackHoverPct}%`,
        "--sp-peelback-active": `${peelBackActivePct}%`,
        "--sp-peel-direction": `${peelDirection}deg`,
      }}
    >
      <svg width="0" height="0" className="sp-defs" aria-hidden="true">
        <defs>
          <filter id={`pointLight-${id}`}>
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting result="spec" in="blur" specularExponent="100" specularConstant={lightingIntensity} lightingColor="white">
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>
          <filter id={`pointLightFlipped-${id}`}>
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting result="spec" in="blur" specularExponent="100" specularConstant={lightingIntensity * 7} lightingColor="white">
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>
          <filter id={`dropShadow-${id}`}>
            <feDropShadow dx="-1" dy="3" stdDeviation={3 * shadowIntensity} floodColor="black" floodOpacity={shadowIntensity} />
          </filter>
          <filter id={`expandAndFill-${id}`}>
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(214,214,214)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div className="sp-container" ref={containerRef} role="img" aria-label={label}>
        <div className="sp-main" style={{ filter: f("dropShadow") }}>
          <div style={{ filter: f("pointLight") }}>
            <img src={imageSrc} alt="" className="sp-image" draggable="false" />
          </div>
        </div>
        <div className="sp-flap">
          <div style={{ filter: f("pointLightFlipped") }}>
            <img src={imageSrc} alt="" className="sp-image sp-flap-image" draggable="false" style={{ filter: f("expandAndFill") }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
