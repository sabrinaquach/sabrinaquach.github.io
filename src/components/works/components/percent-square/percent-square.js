import React from "react";
import './percent-square.css'

const PercentSquare = ({percent, text}) => { 
    return (
        <div className="percent-square">
            <div className="percent-square-row">
                <h3 className="percent-square-percent">{percent}</h3>
                <p className="percent-square-description">{text}</p>
            </div>
        </div>
    )
}

export default PercentSquare;