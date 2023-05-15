import React from "react";
import './CardContainer.css'
import Scores from "./containerComponents/Scores";
import Deck from "./containerComponents/Deck";

const CardContainer = () => {
    return (
        <div className="card-container">
            <Scores />
            <Deck />          
        </div>
    )
}

export default CardContainer;