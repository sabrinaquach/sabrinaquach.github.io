import React from "react";

import "./workFilter.css";

// Chips rather than tabs on purpose: "All" is the default, so every project is
// visible on a plain scroll. Narrowing is opt-in instead of something a visitor
// has to undo to see the rest of the work.
//
// The view toggle shares the bar so there is one control surface, set apart by
// a divider since it changes the layout rather than which projects show.
const VIEWS = [
  { value: "list", label: "List" },
  { value: "grid", label: "Grid" },
];

const WorkFilter = ({ filters, active, onChange, view, onViewChange }) => (
  <div className="work-filter">
    <div className="work-filter-group" role="group" aria-label="Filter projects">
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

    {onViewChange && (
      <>
        <span className="work-filter-divider" aria-hidden="true" />
        <div className="work-filter-group" role="group" aria-label="Project layout">
          {VIEWS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`work-filter-chip${view === value ? " is-active" : ""}`}
              aria-pressed={view === value}
              onClick={() => onViewChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </>
    )}
  </div>
);

export default WorkFilter;
