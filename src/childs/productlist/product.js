import React  from 'react';
import '../../App.css'
export const Product = (props)=>{
    return (
       <div><li key={props.mobile.id}>
       <span className="space">{props.mobile.id}</span>
       <span className="space">{props.mobile.name}</span> 
       <span className="space">{props.mobile.price}</span>  
       <button onClick={props.add}>Add to Cart</button>
       </li>
       </div>
    );
}