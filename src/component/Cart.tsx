import { useEffect, useState } from "react"
import dress from '../../src/women-dress.jpg'
import '../component/shopping-card/shoppingcard.css'
import { AiFillDelete } from 'react-icons/ai'

type ShoppingCardItemProps = {
    id: string,
    title: string,
    desciption: string,
    price: number,
    size: string,
    ShowDelete: boolean
  }
export function Cartitem() {
   const [cartdata, setdata] = useState<ShoppingCardItemProps[]>([]);

  
  useEffect(() => {
    //(JSON.parse( localStorage.getItem('item')|| "{}"))
   if(
    localStorage.getItem('item')
   ) 
   setdata(oldcartdata => [...oldcartdata , JSON.parse(localStorage.getItem('item')|| "{}")])
  } , []);
console.log(cartdata)
    return(

        <>
       { cartdata.map(item =>

         <div className="card"  key={item.id} >
        <img className='cat' src={dress} alt="Avatar" />
        <h3>{item.title} </h3>
        <p>{item.desciption}</p>
        <p><b>{item.price}</b></p>
        <p>Size: {item.size}</p>
        <button className="button3" >Added </button>
        <button className="button3" >  Add to Cart</button>
        
      </div>
       )
      }
      
      
      
       </> 
    )
}