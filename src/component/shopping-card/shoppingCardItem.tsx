import { AiFillDelete } from 'react-icons/ai'
import React, { createContext, useContext, useEffect, useState } from "react"
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


export function ShoppingCardItem(props:any) {
  // console.log(props.deleteitem)
  const {  id ,title, desciption, price, size, ShowDelete }: ShoppingCardItemProps =props
  const [button, setButtontext] = useState("Add to card")
  const changeText = (text: React.SetStateAction<string>) => setButtontext(text);
  const [item, setItem] = useState({});
  const addtoCart=()=> {

    setItem({ id:id ,title:title, description:desciption, price:price, size:size, ShowDelete:ShowDelete})
    // localStorage.setItem('item' ,JSON.stringify(item))
    console.log(JSON.stringify(item))

  }

  return (
    <>
      {ShowDelete ? <AiFillDelete onClick={props.deleteitem}  className="icon" size="2em" /> : ""}
      <div className="card"   >
        <img className='cat' src={dress} alt="Avatar" />
        <h3>{title} </h3>
        <p>{desciption}</p>
        <p><b>{price}</b></p>
        <p>Size: {size}</p>
        <button className="button3" onClick={() => changeText("Added to card")}>{button} </button>
        <button className="button3"onClick={()=>addtoCart()}  >Add to Cart</button>
      </div>
      
    </>
  )
}

