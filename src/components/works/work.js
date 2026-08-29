import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from "../hero/hero";
import ProjectCard from "./components/project-card/projectCard";
import WorkFilter from "./components/work-filter/workFilter";
import projects, { hasCaseStudy } from "./projects";

import './work.css';
import { scrollPageTo } from '../../utilities/pageScroll';

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

const Work = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const [inWork, setInWork] = useState(false);
  const workRef = useRef(null);

  const handleContactClick = () => {
    const el = document.getElementById('footer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollPageTo(0, 'smooth');
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo === 'hero') {
      const el = document.getElementById('hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // The dock is only useful while there is a list to filter, so it rides the
  // visibility of #work itself. The section is taller than the viewport, so a
  // threshold of 0 means "any part of the work list is on screen" — it fades in
  // as the hero scrolls away and out again once the footer takes over.
  useEffect(() => {
    const el = workRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInWork(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filters = useMemo(() => [
    { value: 'all', label: 'All', count: projects.length },
    { value: 'shipped', label: 'Shipped', count: projects.filter(MATCHES.shipped).length },
    { value: 'case-study', label: 'Case studies', count: projects.filter(hasCaseStudy).length },
  ], []);

  const visible = useMemo(() => projects.filter(MATCHES[filter]), [filter]);

  // Filtering changes the height of the column, so every trigger below the
  // filter is measuring against a stale page. Cards remount and refresh on
  // their own, but that happens before layout settles — refresh once after.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [filter]);

  return (
    <div className="main-content">
      <div className="work-container">
        <Hero onMessageClick={handleContactClick} />
      </div>
      <section id="work" className="work-section" ref={workRef}>
        <div className="project-column">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* aria-hidden plus the stylesheet's visibility:hidden keeps the chips
          out of the tab order while the dock is off screen, so they cannot be
          focused from behind the hero. */}
      <div
        className={`work-filter-dock${inWork ? ' is-visible' : ''}`}
        aria-hidden={!inWork}
      >
        <WorkFilter filters={filters} active={filter} onChange={setFilter} />
      </div>
    </div>
  );
};

export default Work;
