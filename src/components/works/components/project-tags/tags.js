import React from "react";
import './tags.css'

// `accent` uses the site's orange as-is in both themes; `color` takes a pastel
// that gets darkened on the light ground (see tags.css).
const ProjectTags = ({ title, text, color, accent = false }) => {
  const tag = accent ? 'var(--accent)' : color;

  return (
    <div 
      className={`project-tags-bubble${accent ? ' is-accent' : ''}`}
      style={tag ? { '--tag': tag } : undefined}
    >
      {/* <h2 className="project-tag-title">{title}</h2> */}
      <p className="project-tag-description">{text}</p>
    </div>
  )
}

export default ProjectTags;
