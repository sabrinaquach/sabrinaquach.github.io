import React from "react";
import './rectangle.css'

const Rectangle = ({ title, text, competitorTitle, icon }) => { 
    return (
        <div className="rectangle">
            <div className="rectangle-column">
                <div className="rectangle-header-row">
                    {icon && <span className="rectangle-icon">{icon}</span>}
                    <h3 className="rectangle-title">{title}</h3>
                </div>
                {competitorTitle && (
                    <h3 className="rectangle-title">
                        <span className="orange-letter">{competitorTitle.charAt(0)}</span>
                        {competitorTitle.slice(1)}
                    </h3>
                )}
                <p className="rectangle-description">{text}</p>
            </div>
        </div>
    )
}

export default Rectangle;