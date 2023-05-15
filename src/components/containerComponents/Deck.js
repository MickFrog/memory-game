import React from "react";
import './Deck.css'
import Card from "./Card";

const Deck = () => {
    return (
        <div className="card-deck">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Deck;