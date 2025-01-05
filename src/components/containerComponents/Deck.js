import React from "react";
import "./Deck.css";
import Card from "./Card";

const Deck = ({ randoms, clickFunc, updateScores }) => {
  return (
    <div className="card-deck">
      {randoms.map((num, index) => {
        return (
          <Card
            key={index}
            picNum={num}
            handleClick={clickFunc}
            updateScores={updateScores}
          />
        );
      })}
    </div>
  );
};

export default Deck;
