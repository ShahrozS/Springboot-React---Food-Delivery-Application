import React , {useState} from 'react'
import DeliveryGuysAll, { DeliveryBoysAll } from './DeliveryguysAll'
import NavbarAdmin from '../NavbarAdmin';


export const Deliveryguys = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div className='backdrop-blur-sm'>
      <NavbarAdmin/>
    <div className='Categories backdrop-blur-sm'>
      
    
    <DeliveryBoysAll/>
  
   

    </div>
    </div>
  )
}

export default Deliveryguys;