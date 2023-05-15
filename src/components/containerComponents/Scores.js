import React from "react";  
import './Scores.css';

const Scores = () => {
    return (
        <div className="scores-div">
            <div className="score-card max-score">Max Score: 30</div>
            <div className="score-card current-score">Current Score: 30</div>
            <div className="score-card best-score">Best Score: 30</div>            
        </div>
    )
}

export default Scores;