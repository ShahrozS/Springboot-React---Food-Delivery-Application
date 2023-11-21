import React , {useState} from 'react'

import NavbarUserWithoutCart from '../navbar/NavBarWithoutCart';
import  { OrderStatusAll } from './OrderStatusAll';


export const OrderStatus = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div className='backdrop-blur-sm'>
      <NavbarUserWithoutCart/>
    <div className='Categories '>
      
    
    <OrderStatusAll/>
    
   

    </div>
    </div>
  )
}

export default OrderStatus;