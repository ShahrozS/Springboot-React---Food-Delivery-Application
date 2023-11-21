import React , {useState} from 'react'

import NavbarUserWithoutCart from '../navbar/NavBarWithoutCart';
import PreviousOrdersAll from './PreviousOrdersAll';


export const PreviousOrders = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div className='backdrop-blur-sm'>
      <NavbarUserWithoutCart/>
    <div className='Categories '>
      
    
    <PreviousOrdersAll/>
    
   

    </div>
    </div>
  )
}

export default PreviousOrders;