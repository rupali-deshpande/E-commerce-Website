import './App.css';
import Navbar from './component/Navbar/Navbar';
import {Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ShoppingCard } from './pages/ShoppingCard';
import { CartItem } from './component/Cart/Cart';
import { Form } from './component/Form/Forms';
import { title } from 'process';


function App() {
  const d=JSON.parse(window.localStorage.getItem("Form")!)
  //let formData:dataProps 
  return (
    <>
    <Navbar />
      <Routes>
        <Route  path="/" element={< ShoppingCard data={d}/>}/>
        <Route path="about" element={<About/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="Cart" element={< CartItem/>} />
        <Route path="Form" element={<Form />}/> 
      </Routes>
   </>
  )
}
export default App;
//<Route path="Form" element={<Form title={''} desciption={''} price={0}/>}/> 