import { AiFillDelete } from 'react-icons/ai'
import React, { createContext, useContext, useState } from "react"
import dress from '../../women-dress.jpg'
import '../shopping-card/shoppingcard.css'
import 'reactjs-popup/dist/index.css';


type ShoppingCardItemProps = {
  id: string,
  title: string,
  desciption: string,
  price: number,
  size: string,
  ShowDelete: boolean
}

// export function ShoppingCardItem({ title, desciption, price, size, showDelete }: ShoppingCardItemProps) {
//     return (

//         <div className="column">
//       {showDelete ? <AiFillDelete  className="icon" size="2em" /> : ""}
//       <div className="card"  >

//         <img className='cat' src={dress} alt="Avatar" />
//         <h3>{title} </h3>
//         <p>{desciption}</p>
//         <p><b>{price}</b></p>
//         <p>Size: {size}</p>
//         <button className="button3" >Add to wishlist</button>
//         <button className="button3" >Add to Cart</button>
//       </div>
//       </div>

//     )
// }

export function ShoppingCardItem({  title, desciption, price, size, ShowDelete }: ShoppingCardItemProps) {
  const [button, setButtontext] = useState("Add to card")
  const changeText = (text: React.SetStateAction<string>) => setButtontext(text);
  
  return (
    <>
      {ShowDelete ? <AiFillDelete  className="icon" size="2em" /> : ""}
      <div className="card"   >
        <img className='cat' src={dress} alt="Avatar" />
        <h3>{title} </h3>
        <p>{desciption}</p>
        <p><b>{price}</b></p>
        <p>Size: {size}</p>
        <button className="button3" onClick={() => changeText("Added to card")}>{button} </button>
        <button className="button3" >Add to Cart</button>
      </div>
      
    </>
  )
}

