import React , {useState} from 'react'

import NavbarUserWithoutCart from '../navbar/NavBarWithoutCart';
import  { OrderStatusAll } from './OrderStatusAll';


export const OrderStatus = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div>
      <NavbarUserWithoutCart/>
    <div className='Categories backdrop-blur-sm'>
      
    
    <OrderStatusAll/>
    
   

    </div>
    </div>
  )
}

export default OrderStatus;