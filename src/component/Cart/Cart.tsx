import React from "react"
import { useEffect, useState } from "react"
import '../shopping-card/shoppingcard.css'


type ShoppingCardItemProps = {
  id: string,
  title: string,
  desciption: string,
  price: number,
  size: string,
  imgUrl:string,
  ShowDelete: boolean
}
export function CartItem() {
    const [cartData, setData] = useState<ShoppingCardItemProps[]>([]);
    useEffect(() => {
        //(JSON.parse( localStorage.getItem('item')|| "{}")) 
        if (localStorage.getItem('cartData'))
            setData(oldcartdata => [...oldcartdata, ...JSON.parse(localStorage.getItem('cartData') || '{}')])
    }, []);
    console.log( JSON.parse(localStorage.getItem('cartData') || '{}'))
    console.log(cartData)
    return (
        <>
            {cartData.length > 0 ?
                cartData.map((item => {
                    return <div className="card" key={item.id} >
                        <img className='cat' src={item.imgUrl} alt="Avatar" />
                        <h3>{item.title} </h3>
                        <p>{item.desciption}</p>
                        <p><b>{item.price}</b></p>
                        <p>Size: {item.size}</p>
                        <button className="button3" >Added </button>
                        <button className="button3" >  Add to Cart</button>
                    </div>
}))
                : <></>
            }
        </>
    )
}