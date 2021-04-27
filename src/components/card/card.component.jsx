import React from 'react';
import './card.styles.css';
export const Card = props=> (
    <div className={'card-container'}>
        <img src={props.fruit.imageurl} alt="fruit"/>
        <h1 >{props.fruit.tfvname} </h1>
</div>
);