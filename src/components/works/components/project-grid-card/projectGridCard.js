import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import ProjectStatus from "../project-status/projectStatus";

import "./projectGridCard.css";

// The compact tile for the grid view: preview clip on top, project info below.
// `span` is how many of the grid's six columns it takes (2 or 3 per row
// pattern, set by Work).
//
// Same click rule as the list: only projects with a page are clickable as a
// whole, and the rest send people out through their own links.
const ProjectGridCard = ({ project, span = 2 }) => {
  const navigate = useNavigate();
  const { title, layout, description, route, media, links } = project;

  const openCaseStudy = route ? () => navigate(route) : undefined;

  // Same iOS autoplay workaround as ProjectCard: set the muted attribute by
  // hand and start playback ourselves.
  const videoRef = useRef(null);
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.setAttribute("muted", "");
    el.play()?.catch(() => {});
  }, [media?.src]);

  const onKeyDown = (e) => {
    if (!route) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(route);
    }
  };

  return (
    <article
      className={`project-grid-card${route ? "" : " project-grid-card-static"}`}
      onClick={openCaseStudy}
      onKeyDown={onKeyDown}
      role={route ? "link" : undefined}
      tabIndex={route ? 0 : undefined}
      aria-label={route ? `${title} — view project` : undefined}
      data-cursor-text={route ? "VIEW CASE STUDY" : undefined}
      style={{ "--grid-span": span }}
    >
      <div className={`project-grid-media project-grid-media-${layout === "phone" ? "phone" : "laptop"}`}>
        {media ? (
          <video
            ref={videoRef}
            src={`${media.src}#t=0.001`}
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
          />
        ) : (
          <span className="project-grid-media-placeholder">preview coming soon</span>
        )}
      </div>

      <div className="project-grid-text">
        <h3 className="project-grid-title">{title}</h3>
        <ProjectStatus project={project} />
        <p className="project-grid-description">{description}</p>

        {links && (links.demo || links.repo) && (
          <div className="project-grid-links">
            {links.demo && (
              <a
                className="card-demo-link"
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View live app ↗
              </a>
            )}
            {links.repo && (
              <a
                className="card-repo-link"
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View code ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectGridCard;
