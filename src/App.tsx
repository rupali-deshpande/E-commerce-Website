import React, { useState } from 'react';
import './App.css';

import { ShoppingCardItem } from './component/shopping-card/shoppingCardItem';
import Navbar from './component/Navbar/Navbar';
import {Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ShoppingCard } from './pages/ShoppingCard';
import { CartItem } from './component/Cart';
import { Form } from './component/Form/Forms';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route  path="/" element={< ShoppingCard/>}/>
        <Route path="about" element={<About/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="Cart" element={< CartItem/>} />
        <Route path="Form" element={<Form/>}>  </Route>
      </Routes>
   </>


  )
}


export default App;
