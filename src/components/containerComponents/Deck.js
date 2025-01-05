import React from "react";
import "./Deck.css";
import Card from "./Card";

const Deck = ({ randoms, clickFunc, updateScores }) => {
  return (
    <div className="card-deck">
      <Card
        picNum={randoms[0]}
        handleClick={clickFunc}
        updateScores={updateScores}
      />
      <Card
        picNum={randoms[1]}
        handleClick={clickFunc}
        updateScores={updateScores}
      />
      <Card
        picNum={randoms[2]}
        handleClick={clickFunc}
        updateScores={updateScores}
      />
      <Card
        picNum={randoms[3]}
        handleClick={clickFunc}
        updateScores={updateScores}
      />
    </div>
  );
};

export default Deck;
