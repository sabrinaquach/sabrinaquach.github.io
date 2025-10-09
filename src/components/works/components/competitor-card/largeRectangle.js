import React from "react";
import './largeRectangle.css'
import '../../../../assets/fonts/font.css'

const LargeRectangle = ({ title, text, name1, name2, name3, innerText1, innerText2, innerText3 }) => { 
    return (
        <div className="large-rectangle">
            <div className="large-rectangle-column">
            <h3 className="large-rectangle-title">
                <span className="orange-letter">{title.charAt(0)}</span>{title.slice(1)}
            </h3>
                <p className="large-rectangle-description">{text}</p>
                <div className="inner-rectangle">
                    <div className="inner-row">
                        <h3 className="company-name">{name1}</h3>
                        <p className="inner-text">{innerText1}</p>
                    </div>
                </div>

                <div className="inner-rectangle">
                    <div className="inner-row">
                        <h3 className="company-name">{name2}</h3>
                        <p className="inner-text">{innerText2}</p>
                    </div>
                </div>

                <div className="inner-rectangle">
                    <div className="inner-row">
                        <h3 className="company-name">{name3}</h3>
                        <p className="inner-text">{innerText3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeRectangle;