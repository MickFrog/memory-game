import React from "react";
import "./Card.css";

const Card = ({ handleClick, updateScores, picNum }) => {
  const localHandleClick = () => {
    handleClick();
    updateScores(picNum);
  };

  return (
    <div className="card" onClick={localHandleClick}>
      <img src={require(`../../assets/cats/cat-${picNum}.png`)} alt="cat_pic" />
    </div>
  );
};

export default Card;
