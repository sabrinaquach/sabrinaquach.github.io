import React from "react";
import './rectangle.css'
import '../../../../assets/fonts/font.css'

const Rectangle = ({ title, text, competitorTitle, icon }) => { 
    return (
        <div className="rectangle">
            <div className="rectangle-column">
                {/* <div className="rectangle-row"></div> */}
                {icon && <span className="rectangle-icon">{icon}</span>}
                <h3 className="rectangle-title">{title}</h3>
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