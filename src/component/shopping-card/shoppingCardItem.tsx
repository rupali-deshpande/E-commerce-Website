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
  AddedTowishlist: boolean
}
export function ShoppingCardItem(props: any) {
  // console.log(props.deleteitem) 
  const { items, addtoCart, deleteTheCard, addtoWishlist } = props

  const [isWishlisted, setWishlisted] = useState<boolean>(false)
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)
  const [deletetheCard, setdeletetheCard] = useState()

  const changeTextForAddCart = (event: any) => {
    event.preventDefault()
    setIsAddedToCart(event.target.value);

    addtoCart(event.target.value);
    addtocarttrue(event.target.value)

  }
  const changeTextForWishlist = (event: any) => {
    event.preventDefault()
    setWishlisted(event.target.value);
    addtowishlist(event.target.value);
    addtoWishlist(event.target.value);
    console.log(event.target.value)
  }
  const addtowishlist = (id: string) => {

    const filterData = items.filter((item: { id: string; AddedTowishlist: boolean }) => {
      if (item.id === id) {
        item.AddedTowishlist = true
      }
    })
  }
  const addtocarttrue = (id: string) => {

    const filterData = items.filter((item: { id: string; AddtoCart: boolean }) => {
      if (item.id === id) {
        item.AddtoCart = true
      }
    })


  }

  const deleteitem = (id: string) => {
    const filterData = items.filter((items: { id: string }) => {
      if ((items.id !== id)) {
        setdeletetheCard(deleteTheCard)

      }
    })
    console.log("data" + filterData);
  }

  return (
    <>
      {items.map((item: ShoppingCardItemProps) => (
        <div className='column'>
          {item.ShowDelete ? <AiFillDelete onClick={() => deleteitem} values={item.id} className="icon" size="2em" /> : ""}

          <div className="card" key={item.id}  >
            <img className='cat' src={item.imgUrl} alt="Avatar" />
            <h3>{item.title} </h3>
            <p>{item.desciption}</p>
            <p><b>{item.price}</b></p>
            <p>Size: {item.size}</p>
            {/* //conditional rendering */}
            <button className="button3" value={item.id} name={item.id} onClick={changeTextForWishlist} >{item.AddedTowishlist ? 'Added to Wishlist' : 'Add to Wishlist'} </button>
            <button className="button3" value={item.id} name={item.id} onClick={changeTextForAddCart}>{item.AddtoCart ? 'Added to Cart' : 'Add to Cart'}</button>
          </div>
        </div>
      ))}

    </>
  )
}

