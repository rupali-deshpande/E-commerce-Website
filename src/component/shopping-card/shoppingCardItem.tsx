import { AiFillDelete } from 'react-icons/ai'
import React, {  useState } from "react"
import dress from '../../women-dress.jpg'
import '../shopping-card/shoppingcard.css'
import 'reactjs-popup/dist/index.css';


type ShoppingCardItemProps = {
  id: string,
  title: string,
  desciption: string,
  price: number,
  size: string,
  ShowDelete: boolean,
}


export function ShoppingCardItem(props: any) {
  // console.log(props.deleteitem) 
  const { id, title, desciption, price, size, ShowDelete }: ShoppingCardItemProps = props
  const [button, setButtontext] = useState("Add to wishlist")
  const changeText = (text: React.SetStateAction<string>) => setButtontext(text);
  const [buttonforcart, setButtontextForCart] = useState("Add to Cart")
  const changeTextForCart = (text: React.SetStateAction<string>) => setButtontext(text);
  
  

  return (
    <>
      {ShowDelete ? <AiFillDelete onClick={props.deleteitem} className="icon" size="2em" /> : ""}
      <div className="card" key={id}  >
        <img className='cat' src={dress} alt="Avatar" />
        <h3>{title} </h3>
        <p>{desciption}</p>
        <p><b>{price}</b></p>
        <p>Size: {size}</p>
        <button className="button3" onClick={() => changeText("Added to wishlist")}>{button} </button>
        <button className="button3" onClick={props.addtoCart }  >Add to Cart</button>
      </div>
      
    </>
  )
}

