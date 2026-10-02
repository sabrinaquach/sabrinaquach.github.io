import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FiArrowUpRight, FiCamera, FiCheck, FiMail, FiX, FiZoomIn } from 'react-icons/fi';
import './customCursor.css';

// Mouse/trackpad only; touch devices keep their native behaviour.
const FINE_POINTER = '(hover: hover) and (pointer: fine)';

const ICONS = {
  arrow: BiRightArrowAlt,
  external: FiArrowUpRight,
  mail: FiMail,
  check: FiCheck,
  camera: FiCamera,
  zoom: FiZoomIn,
  close: FiX,
};

// Pill geometry: side padding + icon + gap before the label.
const PILL_PADDING = 10;
const ICON_SIZE = 16;
const ICON_GAP = 8;

/*
 * A dot that follows the mouse. Over links and buttons it grows and fades;
 * over anything marked with data-cursor-text it stretches into a labelled pill:
 *
 *   <div data-cursor-text="VIEW CASE STUDY">…</div>
 *   <a data-cursor-text="VIEW ON GITHUB" data-cursor-icon="external">…</a>
 *
 * Icons: arrow (default), external, mail, check, camera, zoom, close. Changing the attributes
 * while hovered (e.g. COPY EMAIL -> EMAIL COPIED!) updates the pill live.
 *
 * A link nested inside a labelled area takes over from the label, so the
 * card's own buttons still read as buttons.
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(
    () => window.matchMedia(FINE_POINTER).matches
  );
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [overLink, setOverLink] = useState(false);
  const [label, setLabel] = useState('');
  const [icon, setIcon] = useState('arrow');
  const [labelWidth, setLabelWidth] = useState(0);

  const wrapperRef = useRef(null);
  const measureRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER);
    const onChange = () => setEnabled(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    document.documentElement.classList.add('has-custom-cursor');

    // Position is written straight to the DOM so mousemove never re-renders.
    const onMove = (e) => {
      const el = wrapperRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      setVisible(true);
    };

    // Last element under the pointer, so attribute changes can be re-read.
    let hovered = null;

    const update = (target) => {
      const labelled = target?.closest('[data-cursor-text]');
      const link = target?.closest('a, button, [role="button"], input[type="submit"]');
      const linkWins = link && (!labelled || (labelled !== link && labelled.contains(link)));

      if (labelled && !linkWins) {
        setLabel(labelled.getAttribute('data-cursor-text'));
        setIcon(labelled.getAttribute('data-cursor-icon') || 'arrow');
        setOverLink(false);
      } else {
        setLabel('');
        setOverLink(Boolean(link));
      }
    };

    const onOver = (e) => {
      hovered = e.target instanceof Element ? e.target : null;
      update(hovered);
    };

    const observer = new MutationObserver(() => update(hovered));
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ['data-cursor-text', 'data-cursor-icon'],
    });

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      observer.disconnect();
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  // Measure the label so the pill can animate to an exact width.
  useLayoutEffect(() => {
    if (label && measureRef.current) {
      setLabelWidth(Math.ceil(measureRef.current.getBoundingClientRect().width));
    }
  }, [label]);

  if (!enabled) return null;

  const Icon = ICONS[icon] || ICONS.arrow;

  const isPill = Boolean(label);
  const pillWidth = PILL_PADDING * 2 + ICON_SIZE + ICON_GAP + labelWidth;

  const classes = [
    'custom-cursor',
    isPill && 'is-pill',
    overLink && !isPill && 'is-link',
    pressed && 'is-pressed',
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={wrapperRef}
      className="custom-cursor-wrapper"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className={classes} style={isPill ? { width: pillWidth } : undefined}>
        <span className="custom-cursor-icon">
          <Icon />
        </span>
        <span className="custom-cursor-label">{label}</span>
      </div>
      <span ref={measureRef} className="custom-cursor-label custom-cursor-measure">
        {label}
      </span>
    </div>
  );
};

export default CustomCursor;
