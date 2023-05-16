import React from "react";
import './CardContainer.css'
import Scores from "./containerComponents/Scores";
import Deck from "./containerComponents/Deck";

//function to generate 4 random numbers
function generateNums() {
    let finalArr = [];

    for(let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 20) + 1;
        finalArr.push(num);
    }
    
    return finalArr;
}

//validate generated nums
function validateNums(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) return false;
    }

    return true;
}

//get valid 4 numbers
function getValidNums() {
    let valid = false;
    let validArr = [];

    while(!valid) {
        validArr = generateNums();
        valid = validateNums(validArr);
    }

    return validArr;
}

const CardContainer = () => {
    return (
        <div className="card-container">
            <Scores />
            <Deck />          
        </div>
    )
}

export default CardContainer;