import React, {useState, useCallback} from "react";
import './CardContainer.css'
import Scores from "./containerComponents/Scores";
import Deck from "./containerComponents/Deck";

//function to generate 4 random numbers
function generateNums() {
    let finalArr = [];

    while(finalArr.length < 4) {
        let num = Math.floor(Math.random() * 20) + 1;
        
        //add num to final array if doesn't already exist there.
        if(!finalArr.includes(num)) {
            finalArr.push(num);
        }
    }
    
    return finalArr;
}

const CardContainer = () => {

    const [nums, setNums] = useState(generateNums());

    //handler for resetting the nums
    const changeNums = useCallback(() => {
        //get new random values
        setNums(generateNums());
    }, []);

    return (
        <div className="card-container">
            <Scores />
            <Deck randoms={nums} clickFunc={changeNums}/>
        </div>
    )
}

export default CardContainer;