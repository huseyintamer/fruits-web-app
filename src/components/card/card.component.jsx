import React from 'react';
import './card.styles.css';
export const Card = props=> (
    <div className={'card-container'}>
        <img src={props.fruit.imageurl} alt="fruit"/>
        <h3 >{props.fruit.tfvname} </h3>
        <p >{props.fruit.botname} </p>    
</div>
);