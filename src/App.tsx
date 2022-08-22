import React, { useState } from 'react';
import './App.css';

import { ShoppingCardItem } from './component/shopping-card/shoppingCardItem';
import Navbar from './component/Navbar/Navbar';
import {Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ShoppingCard } from './pages/ShoppingCard';
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route  path="/" element={< ShoppingCard/>}/>
        <Route path="/" element={<About/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
   </>


  )
}


export default App;
{/* <>
      <Sidenav />
      {/* no need */}
      // {data.map((item) => {
      //   return (
      //     <ShoppingCard key={item.id}
      //      title={item.title}
      //       description={item.description}
      //       showDelete={item.showDelete}
      //       size={item.size}
      //       prize={item.prize}
      //       obj={item}
      //       setData={setData}
      //       data={data}
      //     />)
      // })
      // }

    // </> */}

    // const [data, setData] = useState([{ title: "red dress", description: "testtt", prize: "$300", size: " X,L,XL,M", showDelete: true }, {
    //   title: "white dress", description: "testtt1", prize: "$500", size: " X,L,XL,M", showDelete: true
    // },
    // { title: "dress", description: "testtt3", prize: "$800", size: " X,L,XL,M", showDelete: false },
    // { title: "blue dress", description: "testtt2", prize: "$900", size: " X,L,XL,M", showDelete: true }])