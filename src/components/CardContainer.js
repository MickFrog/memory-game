import React, { useState, useCallback, useRef } from "react";
import "./CardContainer.css";
import Scores from "./containerComponents/Scores";
import Deck from "./containerComponents/Deck";

//function to generate 4 random numbers
function generateNums() {
  let finalArr = [];

  while (finalArr.length < 4) {
    let num = Math.floor(Math.random() * 20) + 1;

    //add num to final array if doesn't already exist there.
    if (!finalArr.includes(num)) {
      finalArr.push(num);
    }
  }

  return finalArr;
}

const CardContainer = () => {
  const [nums, setNums] = useState(generateNums());

  //selected cards array to exist throughout component lifetime
  const selectedCards = useRef([]);

  //create state for scores
  let initial_scores = {
    current: 0,
    best: 0,
  };

  const [scores, setScores] = useState(initial_scores);

  const updateScores = useCallback(
    (picNum) => {
      //restart counting cards
      if (selectedCards.current.includes(picNum)) {
        setScores({ ...scores, current: 0 });
        selectedCards.current = [];
      } else {
        //increment current score b4 evaluation in setScore
        setScores({ ...scores, current: ++scores.current });
        selectedCards.current.push(picNum);
      }

      //make current the best score
      if (scores.current > scores.best) {
        setScores({ ...scores, best: scores.current });
      }
    },
    [scores]
  );

  //handler for resetting the nums
  const changeNums = useCallback(() => {
    //get new random values
    setNums(generateNums());
  }, []);

  return (
    <div className="card-container">
      <Scores {...scores} />
      <Deck randoms={nums} clickFunc={changeNums} updateScores={updateScores} />
    </div>
  );
};

export default CardContainer;
