import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from "../hero/hero";
import ProjectCard from "./components/project-card/projectCard";
import ProjectGridCard from "./components/project-grid-card/projectGridCard";
import WorkFilter from "./components/work-filter/workFilter";
import projects, { hasCaseStudy } from "./projects";

import './work.css';
import useFooterInView from '../../utilities/useFooterInView';

// Overlapping on purpose: a project that is both shipped and written up is
// counted under both chips, so neither filter can hide it. The counts add up to
// more than the total, which is the honest read.
//
// Module scope, not component scope: these never change, and a fresh object
// every render would make the memo dependencies below lie.
const MATCHES = {
  all: () => true,
  shipped: (p) => p.shipped,
  'case-study': hasCaseStudy,
};

// The chosen layout is a per-visitor convenience, so it is remembered in the
// browser; storage can be blocked, in which case it just falls back to list.
const VIEW_KEY = 'work-view';

const readView = () => {
  try {
    return localStorage.getItem(VIEW_KEY) === 'grid' ? 'grid' : 'list';
  } catch {
    return 'list';
  }
};

// Grid rows alternate three across, then two across, on a six-column track:
// a card in a row of three spans 2, a card in a row of two spans 3. A short
// last row (the filters can leave one) stretches its cards to fill the width
// instead of leaving a gap.
const ROW_SIZES = [3, 2];

const gridSpans = (count) => {
  const spans = [];
  for (let row = 0; spans.length < count; row++) {
    const size = ROW_SIZES[row % ROW_SIZES.length];
    const inRow = Math.min(size, count - spans.length);
    for (let i = 0; i < inRow; i++) spans.push(6 / inRow);
  }
  return spans;
};

const Work = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState(readView);
  const [inWork, setInWork] = useState(false);
  const footerInView = useFooterInView();
  const workRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'hero') {
      const el = document.getElementById('hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // The dock is only useful while there is a list to filter, so it rides the
  // visibility of #work itself.
  //
  // The bottom 60% of the viewport is cropped out of the root. Without it a
  // threshold of 0 fires the moment the first pixel of #work clips the bottom
  // edge, which is still while the hero fills the screen — the dock was showing
  // over the hero. Shrinking the root means #work has to have risen into the
  // top 40% before it counts, so the dock arrives with the first project card.
  //
  // Only the bottom is cropped: the top edge stays put, so the dock still hides
  // on its own once the list has scrolled past and the footer takes over.
  useEffect(() => {
    const el = workRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInWork(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -60% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filters = useMemo(() => [
    { value: 'all', label: 'All', count: projects.length },
    { value: 'shipped', label: 'Shipped', count: projects.filter(MATCHES.shipped).length },
    { value: 'case-study', label: 'Case studies', count: projects.filter(hasCaseStudy).length },
  ], []);

  // The footer is short, so #work is still on screen at the very bottom of the
  // page; step aside for the footer rather than covering it.
  const showDock = inWork && !footerInView;

  const visible = useMemo(() => projects.filter(MATCHES[filter]), [filter]);
  const spans = useMemo(() => gridSpans(visible.length), [visible]);

  const changeView = (next) => {
    setView(next);
    try {
      localStorage.setItem(VIEW_KEY, next);
    } catch {
      // Not remembered; the toggle still works for this visit.
    }
  };

  // Filtering or switching layout changes the height of the column, so every trigger below the
  // filter is measuring against a stale page. Cards remount and refresh on
  // their own, but that happens before layout settles — refresh once after.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [filter, view]);

  return (
    <div className="main-content">
      <div className="work-container">
        <Hero />
      </div>
      <section id="work" className="work-section" ref={workRef}>
        {view === 'grid' ? (
          <div className="project-grid">
            {visible.map((project, i) => (
              <ProjectGridCard key={project.id} project={project} span={spans[i]} />
            ))}
          </div>
        ) : (
          <div className="project-column">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* aria-hidden plus the stylesheet's visibility:hidden keeps the chips
          out of the tab order while the dock is off screen, so they cannot be
          focused from behind the hero. */}
      <div
        className={`work-filter-dock${showDock ? ' is-visible' : ''}`}
        aria-hidden={!showDock}
      >
        <WorkFilter
          filters={filters}
          active={filter}
          onChange={setFilter}
          view={view}
          onViewChange={changeView}
        />
      </div>
    </div>
  );
};

export default Work;
