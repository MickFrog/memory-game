import React from "react";
import './Card.css';

const Card = (props) => {

    const handleClick = () => {
        props.handleClick();
        props.updateScores(props.picNum);
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={require(`../../assets/cats/cat-${props.picNum}.png`)} alt="cat_pic"/>
        </div>
    )
}

export default Card;