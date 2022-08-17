import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidenav from './component/sidenav';

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
   </div>
      
  );
}

export default App;
