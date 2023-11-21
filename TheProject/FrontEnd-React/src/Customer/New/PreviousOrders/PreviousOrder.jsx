import React , {useState} from 'react'

import NavbarUserWithoutCart from '../navbar/NavBarWithoutCart';
import PreviousOrdersAll from './PreviousOrdersAll';


export const PreviousOrders = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div>
      <NavbarUserWithoutCart/>
    <div className='Categories backdrop-blur-sm'>
      
    
    <PreviousOrdersAll/>
    
   

    </div>
    </div>
  )
}

export default PreviousOrders;