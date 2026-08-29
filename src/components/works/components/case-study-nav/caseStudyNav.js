import React, { useEffect, useMemo, useRef, useState } from "react";

import "./caseStudyNav.css";

const slug = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Floating section nav for a case study.
//
// Pass `sections` as [{ match, label }] to control the tab labels — `match` is
// the heading's own text, `label` is what the tab says, so a long heading like
// "Introducing Reality Check" can sit behind a tab that just reads "Deliver".
// With no prop it falls back to every .project-header on the page, which is the
// eyebrow the other case studies already use to mark their major sections.
const CaseStudyNav = ({ sections }) => {
  const [targets, setTargets] = useState([]);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const barRef = useRef(null);

  const spec = useMemo(() => sections, [sections]);

  // Resolve headings to elements once the page has rendered, and give each one
  // an id so the tabs have something to scroll to.
  useEffect(() => {
    const root = document.querySelector(".case-study-container") || document;
    const text = (el) => (el.textContent || "").trim();

    let found;
    if (spec && spec.length) {
      const headers = Array.from(root.querySelectorAll(".project-header, .section-header"));
      found = spec
        .map(({ match, label }) => {
          const el = headers.find((h) => text(h).toLowerCase() === match.toLowerCase());
          return el ? { el, label } : null;
        })
        .filter(Boolean);
    } else {
      found = Array.from(root.querySelectorAll(".project-header"))
        // The "— Case Study 04" eyebrow names the page, not a section.
        .filter((el) => !/^—?\s*case study/i.test(text(el)))
        .map((el) => ({ el, label: text(el) }));
    }

    found.forEach(({ el, label }) => {
      if (!el.id) el.id = `cs-${slug(label)}`;
    });
    setTargets(found.map(({ el, label }) => ({ id: el.id, label })));
  }, [spec]);

  // Positions come from getBoundingClientRect, never from window.scrollY:
  // styles.css sets html/body to height:100% with overflow-x:hidden, which can
  // make body the scroll container, and scrollY then stays 0 for the whole page.
  //
  // For the same reason the listener is registered in the capture phase on
  // document, so it fires whichever element actually scrolls, with an
  // IntersectionObserver as a second trigger that needs no scroll event at all.
  useEffect(() => {
    if (!targets.length) return;

    const els = targets.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    let frame = null;
    const measure = () => {
      frame = null;
      const line = window.innerHeight * 0.25;
      let current = 0;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
      // Show it once the first section has reached the upper half of the
      // viewport — i.e. once there is a case study on screen to navigate.
      setVisible(els[0].getBoundingClientRect().top <= window.innerHeight * 0.5);
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };

    measure();
    document.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);
    const observer = new IntersectionObserver(schedule, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    els.forEach((el) => observer.observe(el));

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      document.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [targets]);

  // Keep the active tab in view when the bar is wider than the screen.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const chip = bar.children[active];
    if (!chip) return;
    const left = chip.offsetLeft - (bar.clientWidth - chip.clientWidth) / 2;
    bar.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  if (targets.length < 2) return null;

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    // scrollIntoView works against whichever element is the scroll container,
    // unlike window.scrollTo(top). scroll-margin-top on the heading is what
    // holds it clear of the fixed navbar.
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`cs-nav-dock${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <nav className="cs-nav" ref={barRef} aria-label="Case study sections">
        {targets.map(({ id, label }, i) => (
          <button
            key={id}
            type="button"
            className={`cs-nav-chip${i === active ? " is-active" : ""}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CaseStudyNav;
