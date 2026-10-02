import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import ScrollRevealImage from "../../../../utilities/ScrollRevealImage";
import DecryptedText from "../../../../utilities/DecryptedText";
import ProjectStatus from "../project-status/projectStatus";

import "./projectCard.css";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { title, layout, description, route, media, links } = project;

  // Only the cards with a written case study are clickable as a whole. Sending
  // a whole-card click out to an external site would be a surprise, so cards
  // without a route stay inert and route their traffic through the button.
  const openCaseStudy = route ? () => navigate(route) : undefined;

  // React sets `muted` as a property but never writes the attribute, and iOS
  // Safari checks the attribute before allowing autoplay — so on phones the
  // clips sat blank. Set it by hand and kick playback off ourselves.
  const videoRef = useRef(null);
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.setAttribute("muted", "");
    el.play()?.catch(() => {});
  }, [media?.src]);


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

    // The #t fragment makes iOS paint the first frame even when it refuses to
    // autoplay (Low Power Mode), so the card never shows an empty box.
    const video = (
      <video
        ref={videoRef}
        src={`${media.src}#t=0.001`}
        loop
        muted
        autoPlay
        playsInline
        preload="auto"
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
        data-cursor-text={route ? "VIEW CASE STUDY" : undefined}
      >
        <div className={layout === "phone" ? "project-text-phone" : "project-text-laptop"}>
          <DecryptedText
            className="project-title"
            encryptedClassName="encrypted-char"
            text={title}
            animateOn="view"
            revealDirection="start"
            sequential="true"
            speed="120"
          />

          <ProjectStatus project={project} />

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
        </div>

        <ScrollRevealImage>
          <div className="project-image">{renderMedia()}</div>
        </ScrollRevealImage>
      </div>
    </section>
  );
};

export default ProjectCard;
