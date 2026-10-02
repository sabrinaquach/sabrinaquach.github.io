import React from "react";
import { hasCaseStudy } from "../../projects";
import "./projectStatus.css";

// SHIPPED / CONCEPT / CASE STUDY, from the project's entry in projects.js.
// Used on the work page's cards and above each case study's title, so the two
// always say the same thing.
export const projectStatuses = (project) => [
  project.shipped && { key: 'shipped', label: 'Shipped' },
  project.concept && { key: 'concept', label: 'Concept' },
  hasCaseStudy(project) && { key: 'case-study', label: 'Case study' },
].filter(Boolean);

const ProjectStatus = ({ project, className = "" }) => {
  const statuses = projectStatuses(project);
  if (!statuses.length) return null;

  return (
    <p className={`project-status-line ${className}`}>
      {statuses.map((status, i) => (
        <React.Fragment key={status.key}>
          {i > 0 && <span className="project-status-sep">/</span>}
          <span className={`project-status project-status-${status.key}`}>
            {status.label}
          </span>
        </React.Fragment>
      ))}
    </p>
  );
};

export default ProjectStatus;
