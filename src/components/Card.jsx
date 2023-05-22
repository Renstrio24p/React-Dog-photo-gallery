import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.image} alt="dog photo" />
            <div>
                <h1 className="type">{props.type}</h1>
                <p className="definition">{props.description}</p>
            </div>
        </div>
    )
}
