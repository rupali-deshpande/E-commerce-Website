import React , {useState} from "react";
import dress from '../women-dress.jpg'
import './shoppingcard.css'
import { AiFillDelete } from 'react-icons/ai';
import {MdAddShoppingCart} from 'react-icons/md'




 function ShoppingCard(props:any) {
 
    return(
         
  <div className="column">
    { props.showDelete? <AiFillDelete  className="icon"size="2em" />:""}
    <div className="card">
    
    <img  className='cat' src={dress} alt="Avatar"/ >
   
      <h3>{props.title} </h3>
      <p>{props.description}</p>
      <p><b>{props.prize}</b></p>
      <p>Size: {props.size}</p>
      <button className="button3">Add to wishlist</button>
      <button className="button3">Add to Card</button>
      {/* <button className="button" > <MdAddShoppingCart size="2em" /></button> */}
      
    </div>
  </div>

        

    )
}

export default ShoppingCard;
