import React from "react";
import './designCard.css'

const DesignCard = ({ 
    number, title, image, alt, text1, 
    text2, text3, text4, text5, text6, 
    text7, text8 
}) => { 
    return (
        <div className="design-card">
            <h2 className="design-card-number">{number}</h2>
            <div className="design-card-column">
                <div className="design-card-header-column">
                    <h3 className="design-card-title">{title}</h3>
                    <img className="design-card-image" src={image} alt={alt} />
                
                    <div className="problem-solution-cards-row">
                        <div className="problem-solution-card">
                            <h3 className="problem-solution-subtitle">Problem</h3>
                            <div className="problem-solution-column">
                                <p className="problem-solution-text">{text1}</p>
                                <p className="problem-solution-text">{text2}</p>
                                <p className="problem-solution-text">{text3}</p>
                                <p className="problem-solution-text">{text4}</p>
                            </div>
                        </div>

                        <div className="problem-solution-card">
                            <h3 className="problem-solution-subtitle">Solution</h3>
                            <div className="problem-solution-column">
                                <p className="problem-solution-text">{text5}</p>
                                <p className="problem-solution-text">{text6}</p>
                                <p className="problem-solution-text">{text7}</p>
                                <p className="problem-solution-text">{text8}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignCard;