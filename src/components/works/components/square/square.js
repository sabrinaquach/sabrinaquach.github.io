import React from "react";
import './square.css'

const Square = ({title, text}) => { 
    return (
        <div className="square">
            <div className="square-column">
                <h3 className="square-title">{title}</h3>
                <p className="square-description">{text}</p>
            </div>
        </div>
    )
}

export default Square;