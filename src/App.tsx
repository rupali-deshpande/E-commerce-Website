import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidenav from './component/sidenav';
import dress from './component/women-dress.jpg';

function App() {
  return (
<div>
    <nav className="navbar">
     <div className="logo">Shopify</div>
     <ul className="nav-links">
      
       <div className="menu">
         <li><a href="/">Home</a></li>
         <li><a href="/">About</a></li>
         <li className="services">
           <a href="/">Category</a>

           <ul className="dropdown">
             <li><a href="/">Male </a></li>
             <li><a href="/">Female</a></li>
             <li><a href="/">Kids</a></li>
           </ul>
         </li>
         <li><a href="/">Pricing</a></li>
         <li><a href="/">Contact</a></li>
       </div>
     </ul>
   </nav>
   
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
      
  );
}

export default App;
