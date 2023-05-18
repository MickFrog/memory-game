import React from "react";
import './Deck.css'
import Card from "./Card";

const Deck = (props) => {
    return (
        <div className="card-deck">
            <Card picNum={props.randoms[0]} handleClick={props.clickFunc} updateScores={props.updateScores}/>
            <Card picNum={props.randoms[1]} handleClick={props.clickFunc} updateScores={props.updateScores}/>
            <Card picNum={props.randoms[2]} handleClick={props.clickFunc} updateScores={props.updateScores}/>
            <Card picNum={props.randoms[3]} handleClick={props.clickFunc} updateScores={props.updateScores}/>
        </div>
    )
}

export default Deck;