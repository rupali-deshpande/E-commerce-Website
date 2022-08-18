import React , {useState} from "react";
import dress from '../women-dress.jpg'
import './shoppingcard.css'
import { AiFillDelete } from 'react-icons/ai';
import {MdAddShoppingCart} from 'react-icons/md'




 function ShoppingCard(props:any) {
 
    return(
        <div>
          
  <div className="column">
    <div className="card">
    <img  className='cat' src={dress} alt="Avatar"/ >
      <h3>{props.title} </h3>
      <p>{props.description}</p>
      <p><b>{props.prize}</b></p>
      <p>Size: {props.size}</p>
      <button className="button" > <MdAddShoppingCart size="2em" /></button>
      { props.showDelete? <button className="button2" ><AiFillDelete size="2em" /></button>:""}
    </div>
  </div>

  
</div>
        

    )
}

export default ShoppingCard;
