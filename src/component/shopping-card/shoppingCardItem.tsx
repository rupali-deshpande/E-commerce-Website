import { AiFillDelete } from 'react-icons/ai'
import React, { useState } from "react"
import '../shopping-card/shoppingcard.css'
import 'reactjs-popup/dist/index.css';



type ShoppingCardItemProps = {
  id: string,
  title: string,
  desciption: string,
  price: number,
  size: string,
  imgUrl: string,
  ShowDelete: boolean

}


export function ShoppingCardItem(props: any) {
  // console.log(props.deleteitem) 
  const { id, title, desciption, price, size, ShowDelete, imgUrl }: ShoppingCardItemProps = props
  const changeTextForCart =() => {
    setWishlisted(true);
  }
  const changeTextForAddCart = () => {
    props.addtoCart()
    setIsAddedToCart(true)
  }
  const [isWishlisted ,setWishlisted] = useState<boolean>(false)
  const [isAddedToCart , setIsAddedToCart] =useState<boolean>(false)



  return (
    <>
      {ShowDelete ? <AiFillDelete onClick={props.deleteitem} className="icon" size="2em" /> : ""}
      <div className="card" key={id}  >
        <img className='cat' src={imgUrl} alt="Avatar" />
        <h3>{title} </h3>
        <p>{desciption}</p>
        <p><b>{price}</b></p>
        <p>Size: {size}</p>
        <button className="button3" onClick={changeTextForCart}>{isWishlisted ? 'Added to Wishlist': 'Add to Wishlist'} </button>
        <button className="button3" onClick={changeTextForAddCart}>{isAddedToCart ? 'Added to Cart' : 'Add to Cart'}</button>
      </div>

    </>
  )
}

