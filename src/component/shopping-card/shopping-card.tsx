import React from "react";
import dress from '../women-dress.jpg'
import './shoppingcard.css'

function ShoppingCard() {
    return(
        <div>
            <div className="row">
  <div className="column">
    <div className="card">
    <img  className='cat' src={dress} alt="Avatar"/ >
      <h3>Selvia </h3>
      <p>Sleeves  Women Black Dress</p>
      <p><b>$300</b></p>
      <p>Size: X,L,XL,M</p>
      
      
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img  className='cat' src={dress} alt="Avatar"/ >
    <h3>Selvia </h3>
      <p>Sleeves  Women Black Dress</p>
      <p><b>$300</b></p>
      <p>Size: X,L,XL,M</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <img  className='cat' src={dress} alt="Avatar"/ >
    <h3>Selvia </h3>
      <p>Sleeves  Women Black Dress</p>
      <p><b>$300</b></p>
      <p>Size: X,L,XL,M</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <img  className='cat' src={dress} alt="Avatar"/ >
    <h3>Selvia </h3>
      <p>Sleeves  Women Black Dress</p>
      <p><b>$300</b></p>
      <p>Size: X,L,XL,M</p>
    </div>
  </div>
</div>
        </div>

    )
}
export default ShoppingCard