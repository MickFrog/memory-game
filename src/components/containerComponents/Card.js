import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={require(`../../assets/cats/cat-${props.picNum}.png`)} alt="cat_pic" />
        </div>
    )
}

export default Card;