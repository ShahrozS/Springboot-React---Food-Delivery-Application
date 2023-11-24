import React , {useState} from 'react'

import NavbarAdmin from '../NavbarAdmin'
import OrdersAll from './OrdersAll';


export const Orders = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div className='backdrop-blur-sm'>
      <NavbarAdmin/>
    <div className='Categories backdrop-blur-sm'>
      
    
    <OrdersAll/>
    
   

    </div>
    </div>
  )
}

export default Orders;