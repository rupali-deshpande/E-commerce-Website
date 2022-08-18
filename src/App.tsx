import React  from 'react';
import './App.css';
import ShoppingCard from './component/shopping-card/shopping-card';
import Sidenav from './component/sidenav/sidenav';


function App() {
  const data = [{title: "red dress", description: "testtt", prize :"$300" , size:" X,L,XL,M" ,showDelete: false},{
    title: "white dress", description: "testtt1",prize :"$500",size:" X,L,XL,M", showDelete: true},
    {title: "white dress", description: "testtt3",prize :"$800" , size:" X,L,XL,M" ,showDelete: false},
    {title: "white dress", description: "testtt2",prize :"$900",size:" X,L,XL,M", showDelete: false}
    ]
  return (
  <div>  
    <>
   <Sidenav />

   {data.map((item )=>{
    return(
<ShoppingCard  title={item.title}
 description={item.description} 
 showDelete={item.showDelete} 
 size={item.size}
  prize={item.prize}/>)
})
   }
   </>
   </div>
      
  );
}
 

export default App;
