import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ShoppingCard } from './pages/ShoppingCard';
import { CartItem } from './component/Cart/Cart';
import { Form } from './component/Form/Forms';
import { useEffect, useState } from 'react';
import { ShoppingCardItem } from './component/shopping-card/shoppingCardItem';


type ShoppingCardItemProps = {
  id: string,
  title: string,
  desciption: string,
  price: number,
  size: string,
  imgUrl: string,
  AddtoCart?: boolean,
  ShowDelete: boolean
}

function App() {
  const cartData = [
    {
      "id": "01",
      "title": "Peter England",
      "desciption": "Peach Regular Fit Formal Shirts",
      "price": 2276,
      "size": "X,L,XS",
      "imgUrl": "../../img/dress-2.jpg",
      "ShowDelete": true
    },
    {
      "id": "02",
      "title": "PUMA",
      "desciption": "Peach Regular Fit Formal Shirts",
      "price": 2276,
      "size": "X,L,XS",
      "imgUrl": "../img/women-dress.jpg",
      "ShowDelete": true
    },
    {
      "id": "03",
      "title": "Sherin",
      "desciption": "Peach Regular Fit Formal Shirts",
      "price": 2276,
      "size": "X,L,XS",
      "imgUrl": "../../img/women-dress.jpg",
      "ShowDelete": false
    },
    {
      "id": "04",
      "title": "ZARA ",
      "desciption": "Peach Regular Fit Formal Shirts",
      "price": 2276,
      "size": "X,L,XS",
      "imgUrl": "/img/women-dress.jpg",
      "ShowDelete": false
    }
  ]
  const d = JSON.parse(window.localStorage.getItem("Form")!)
  //let formData:dataProps 
  const [data, setCartData] = useState(cartData)
  const [dataItem, setItem] = useState<ShoppingCardItemProps[]>([]);
  const deleteTheCard = (id: string) => {
    // //unique ID
    const filterData = data.filter((item) => item.id !== id)
    console.log(dataItem)
    setCartData(filterData)
    console.log(filterData)
  }
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(dataItem))
    console.log(dataItem)
  }, [dataItem]);

  const addtoCart = (id: string) => {

    const filterData = data.filter((item) => item.id === id)
    console.log(filterData)
    dataItem.push(...filterData)

    //setItem(oldcartdata => console.log(oldcartdata))
    console.log(dataItem)
  }
  console.log(data)
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ShoppingCardItem addtoCart={addtoCart}
          deleteTheCard={deleteTheCard}
          items={data} setCartData={setCartData} />} />

        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="Cart" element={< CartItem />} />
        <Route path="Form" element={<Form />} />
      </Routes>
    </>
  )
}
export default App;
//<Route path="Form" element={<Form title={''} desciption={''} price={0}/>}/> 