import { AiFillDelete } from 'react-icons/ai'
import ItemDetails from '../data/carddetails.json'
import '../component/shopping-card/shoppingcard.css'
import { ShoppingCardItem } from '../component/shopping-card/shoppingCardItem'
import { useState } from 'react'

export function ShoppingCard () {
    
    return(     
<>
{ItemDetails.map(item =>(
    <div className="column" key={item.id}>
        <div  >
      <ShoppingCardItem   {...item}/><div/>
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