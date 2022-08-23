import { AiFillDelete } from 'react-icons/ai'
import ItemDetails from '../data/carddetails.json'
import '../component/shopping-card/shoppingcard.css'
import { ShoppingCardItem } from '../component/shopping-card/shoppingCardItem'
import { useState } from 'react'

export function ShoppingCard () {
    const [data , setdata]= useState(ItemDetails)
    const deleteTheCard = (id:any) => {
        //console.log(id)
            // //unique ID
            const filterdata = data.filter((item)=>item.id!== id)
            setdata(filterdata)
            //console.log(filterdata)
          }
    return(     
<>
{data.map(item =>(
    <div className="column" key={item.id}>
        <div  >
      <ShoppingCardItem   {...item} deleteitem={(id:any)=>deleteTheCard(item.id)}/><div/>
      </div>
    </div>
))}
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