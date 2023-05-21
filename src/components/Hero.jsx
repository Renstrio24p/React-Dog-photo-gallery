import React from "react";
import Card from "./Card";
import Data from "./Data";
import './card.css';

export default function Hero(){
    const cards = Data.map (item => {
        return (
            <Card
                key = {item.id}
                {...item}
            />
        )
    })

    return (
        <div className="hero">
            {cards}
        </div>
    )
}