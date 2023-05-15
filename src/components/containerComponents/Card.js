import React from "react";
import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <img src={require('../../assets/cats/cat-8.png')} alt="cat_pic" />
        </div>
    )
}

export default Card;