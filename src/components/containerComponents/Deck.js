import React from "react";
import './Deck.css'
import Card from "./Card";

const Deck = (props) => {
    return (
        <div className="card-deck">
            <Card picNum={props.randoms[0]}/>
            <Card picNum={props.randoms[1]}/>
            <Card picNum={props.randoms[2]}/>
            <Card picNum={props.randoms[3]}/>
        </div>
    )
}

export default Deck;