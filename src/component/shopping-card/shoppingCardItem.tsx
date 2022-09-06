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
  ShowDelete: boolean,
  AddtoCart: boolean,
}
export function ShoppingCardItem(props: any) {
  // console.log(props.deleteitem) 
  const { items, addtoCart, deleteTheCard } = props
  const changeTextForCart = () => {
    setWishlisted(true);
  }
  const changeTextForAddCart = (event: any) => {
    event.preventDefault()
    setIsAddedToCart(event.target.value);
    addtoCart(event.target.value);
    addtocarttrue(event.target.value)
    console.log(event.target.value)
  }
  const addtocarttrue = (id: string) => {

    const filterData = items.filter((item: { id: string; AddtoCart: boolean }) => {
      if (item.id === id) {
        item.AddtoCart = true
      }
    })


  }
  const [isWishlisted, setWishlisted] = useState<boolean>(false)
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)

  const deleteitem = {

  }

  return (
    <>
      {items.map((item: ShoppingCardItemProps) => (
        <div className='column'>
          {item.ShowDelete ? <AiFillDelete values={item.id} className="icon" size="2em" /> : ""}

          <div className="card" key={item.id}  >
            <img className='cat' src={item.imgUrl} alt="Avatar" />
            <h3>{item.title} </h3>
            <p>{item.desciption}</p>
            <p><b>{item.price}</b></p>
            <p>Size: {item.size}</p>
            {/* //conditional rendering */}
            <button className="button3" onClick={changeTextForCart}>{isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'} </button>
            <button className="button3" value={item.id} name={item.id} onClick={changeTextForAddCart}>{item.AddtoCart ? 'Added to Cart' : 'Add to Cart'}</button>
          </div>
        </div>
      ))}

    </>
  )
}

