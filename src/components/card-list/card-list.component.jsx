import React from 'react';
import './card-list.styles.css';
export const CardList = props => {

return <div className='card-list'>
         {
       props.fruits.map(fruit=> (
         <h3 key={fruit.tfvname}>{fruit.tfvname}</h3>
         )
       )
     }
</div>
};
