import React from "react";
import './tags.css'

const ProjectTags = ({ title, text, color = "#ffffff" }) => { 

  const hexToRgba = (hex, alpha) => {
    if (!hex) return `rgba(255, 255, 255, ${alpha})`;

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div 
      className="project-tags-bubble"
      style={{ 
        backgroundColor: hexToRgba(color, 0.2),
        color: color,
        borderColor: color
      }}
    >
      {/* <h2 className="project-tag-title">{title}</h2> */}
      <p className="project-tag-description">{text}</p>
    </div>
  )
}

export default ProjectTags;
