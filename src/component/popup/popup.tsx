import React from 'react';
import '../popup/popup.css'
import dress from '../women-dress.jpg'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { ShoppingCard } from '../../pages/ShoppingCard';

function PopUp({title , description , prize , size , showDelete , obj , setData , data}:any){

    return (
    <>
        <Popup position="right center">
    <div className="card"   >
        <p>hsj</p>
    </div>
      </Popup>
      </>
    )

}
export default PopUp;


