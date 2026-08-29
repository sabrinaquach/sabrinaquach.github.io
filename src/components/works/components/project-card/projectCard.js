import React from "react";
import { useNavigate } from "react-router-dom";

import ScrollRevealImage from "../../../../utilities/ScrollRevealImage";
import DecryptedText from "../../../../utilities/DecryptedText";
import ProjectTags from "../project-tags/tags";
import SeeProjectButton from "../see-portfolio/see-portfolio";
import { hasCaseStudy } from "../../projects";

import "./projectCard.css";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { title, shipped, layout, description, route, media, links, tags } = project;

  // Only the cards with a written case study are clickable as a whole. Sending
  // a whole-card click out to an external site would be a surprise, so cards
  // without a route stay inert and route their traffic through the button.
  const openCaseStudy = route ? () => navigate(route) : undefined;

  // Every project gets a SEE PROJECT button; only the destination differs.
  // Falling back demo -> repo means a project with neither simply has no
  // button rather than a dead one.
  const seeProject = route
    ? { click: openCaseStudy }
    : links?.demo
    ? { href: links.demo }
    : links?.repo
    ? { href: links.repo }
    : null;

  // Quiet text, not pills. SEE PROJECT is a deliberate attention magnet
  // sitting right above this, and the tags below are pills too — another pill
  // here just competes with the button for the same click.
  const statuses = [
    shipped && { key: 'shipped', label: 'Shipped' },
    hasCaseStudy(project) && { key: 'case-study', label: 'Case study' },
  ].filter(Boolean);

  // Adobe Flux and Pip have their device frames rendered into the video file
  // itself. This draws one in CSS instead, so a plain screen recording can be
  // dropped in without re-rendering the clip — set `frame: 'laptop'` on media.
  const renderMedia = () => {
    if (!media) {
      // Keeps the two-column rhythm instead of letting the text stretch the
      // full width while a clip is still missing.
      return (
        <div className="project-image-placeholder">
          <span>{title}</span>
          <span className="project-image-placeholder-note">preview coming soon</span>
        </div>
      );
    }

    const video = (
      <video
        src={media.src}
        loop
        muted
        autoPlay
        playsInline
        className={media.frame === "laptop" ? "laptop-screen-video" : media.className}
      />
    );

    if (media.frame !== "laptop") return video;

    return (
      <div className="laptop-frame">
        <div className="laptop-screen">{video}</div>
        <div className="laptop-base" />
      </div>
    );
  };

  return (
    <section className="project-section">
      <div
        className={`project-block${route ? "" : " project-block-static"}`}
        onClick={openCaseStudy}
      >
        <div className={layout === "phone" ? "project-text-phone" : "project-text-laptop"}>
          {seeProject && (
            <div className="button-wrapper">
              <SeeProjectButton {...seeProject} />
            </div>
          )}

          <DecryptedText
            className="project-title"
            encryptedClassName="encrypted-char"
            text={title}
            animateOn="view"
            revealDirection="start"
            sequential="true"
            speed="120"
          />

          {statuses.length > 0 && (
            <p className="project-status-line">
              {statuses.map((status, i) => (
                <React.Fragment key={status.key}>
                  {i > 0 && <span className="project-status-sep">/</span>}
                  <span className={`project-status project-status-${status.key}`}>
                    {status.label}
                  </span>
                </React.Fragment>
              ))}
            </p>
          )}

          <p className="project-description">{description}</p>

          {links && (
            <div className="live-app-block">
              <div className="live-app-buttons">
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
              {links.note && <span className="live-app-note">{links.note}</span>}
            </div>
          )}

          <div className="project-tags">
            {tags.map((tag) => (
              <ProjectTags key={tag.text} text={tag.text} color={tag.color} />
            ))}
          </div>
        </div>

        <ScrollRevealImage>
          <div className="project-image">{renderMedia()}</div>
        </ScrollRevealImage>
      </div>
    </section>
  );
};

export default ProjectCard;
