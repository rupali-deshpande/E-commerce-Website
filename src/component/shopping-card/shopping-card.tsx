import React , {useState} from "react";
import dress from '../women-dress.jpg'
import './shoppingcard.css'
import { AiFillDelete } from 'react-icons/ai';



 function ShoppingCard({title , description , prize , size , showDelete , obj , setData , data}:any) {
// delete obj.showDelete;
const handleOnclick= (event: React.MouseEvent<HTMLElement>) =>{

// localStorage.setItem(obj.title , JSON.stringify(obj))

}
const deleteTheCard= (event:React.MouseEvent<any>)=>{
  const filterdata = data.filter((dress: { title: any; })=>dress.title!==title)
  setData(filterdata)
  console.log(data)
  
}
    return(  
  <div className="column">
   
    { showDelete? <AiFillDelete onClick={deleteTheCard}  className="icon"size="2em" />:""}
   
    <div className="card" >
    <img  className='cat' src={dress} alt="Avatar"/ >
      <h3>{title} </h3>
      <p>{description}</p>
      <p><b>{prize}</b></p>
      <p>Size: {size}</p>
      <button className="button3">Add to wishlist</button>
      <button className="button3" onClick={handleOnclick}>Add to Cart</button> 
    </div>
  </div>
    )
}

export default ShoppingCard;
