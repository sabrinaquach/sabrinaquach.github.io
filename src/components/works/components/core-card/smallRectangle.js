import React from "react";
import './smallRectangle.css'
import '../../../../assets/fonts/font.css'

const SmallRectangle = ({ title, text, competitorTitle, icon }) => { 
    return (
        <div className="small-rectangle">
            <div className="small-rectangle-column">
                {icon && <span className="rectangle-icon">{icon}</span>}
                <h3 className="small-rectangle-title">{title}</h3>
                {competitorTitle && (
                    <h3 className="small-rectangle-title">
                        <span className="orange-letter">{competitorTitle.charAt(0)}</span>
                        {competitorTitle.slice(1)}
                    </h3>
                )}
                <h3 className="small-rectangle-description">{text}</h3>
            </div>
        </div>
    )
}

export default SmallRectangle;