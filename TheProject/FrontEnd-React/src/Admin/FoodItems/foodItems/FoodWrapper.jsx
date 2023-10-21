import React , {useState} from 'react'


import FooditemsAll from './FooditemsAll'
import NavbarAdmin from '../../Navbar';


export const Fooditems = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div>
      <NavbarAdmin/>
    <div className='Categories  backdrop-blur-sm'>
    
    <FooditemsAll/>
   

    </div>
    </div>
  )
}

export default Fooditems;