import React from "react";

import "./workFilter.css";

// Chips rather than tabs on purpose: "All" is the default, so every project is
// visible on a plain scroll. Narrowing is opt-in instead of something a visitor
// has to undo to see the rest of the work.
const WorkFilter = ({ filters, active, onChange }) => (
  <div className="work-filter" role="group" aria-label="Filter projects">
    {filters.map(({ value, label, count }) => (
      <button
        key={value}
        type="button"
        className={`work-filter-chip${active === value ? " is-active" : ""}`}
        aria-pressed={active === value}
        onClick={() => onChange(value)}
      >
        {label}
        <span className="work-filter-count">{count}</span>
      </button>
    ))}
  </div>
);

export default WorkFilter;
