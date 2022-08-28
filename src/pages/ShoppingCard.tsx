
import ItemDetails from '../data/carddetails.json'
import '../component/shopping-card/shoppingcard.css'
import { ShoppingCardItem } from '../component/shopping-card/shoppingCardItem'
import { useEffect, useState } from 'react'

type ShoppingCardItemProps = {
  id: string,
  title: string,
  desciption: string,
  price: number,
  size: string,
  ShowDelete: boolean
}

export function ShoppingCard() {
  const [data, setData] = useState(ItemDetails)
  const [item, setItem] = useState<ShoppingCardItemProps[]>([]);
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(item))
    console.log(item)
  }, [item]);

  const deleteTheCard = (id: any) => {
    //console.log(id)
    // //unique ID
    const filterData = data.filter((item) => item.id !== id)
    setData(filterData)
    console.log(filterData)
  }
  const addtoCart = (id: string) => {
    // localStorage.setItem('item', JSON.stringify(item))
    const filterData = data.filter((item) => item.id === id)
    setItem(oldcartdata => [...oldcartdata, ...filterData])
    console.log(filterData)

  }
  return (
    <>
      {data.map(item => (
        <div className="column" key={item.id}>
          <div  >
            <ShoppingCardItem
              {...item} addtoCart={(id: string) => addtoCart(item.id)}
              deleteitem={(id: string) => deleteTheCard(item.id)} /><div />
          </div>
        </div>

      ))}
      {/* <div> <button  onClick={()=>addtoCart}> {item.length}Cart</button></div> */}
      <button onClick={() => addtoCart} className="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
        >
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>

        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%, 25%)",
          }}
        >
          {item.length}
        </div>
      </button>
    </>
  )

}

// {showDelete ? <AiFillDelete  className="icon" size="2em" /> : ""}
//       <div className="card"   >

//         <img className='cat' src={dress} alt="Avatar" />
//         <h3>{title} </h3>
//         <p>{description}</p>
//         <p><b>{prize}</b></p>
//         <p>Size: {size}</p>
//         <button className="button3" >Add to wishlist</button>
//         <button className="button3">Add to Cart</button>
//       </div>