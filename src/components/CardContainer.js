import React from "react";
import './CardContainer.css'
import Scores from "./containerComponents/Scores";

const CardContainer = () => {
    return (
        <div className="card-container">
            <Scores />
        </div>
    )
}

export default CardContainer;