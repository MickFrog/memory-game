import React from "react";  
import './Scores.css';

const Scores = (props) => {
    return (
        <div className="scores-div">
            <div className="score-card current-score">Current Score: {props.current}</div>
            <div className="score-card best-score">Best Score: {props.best}</div>            
        </div>
    )
}

export default Scores;