import React , {useState} from 'react'


import FooditemsAll from './FooditemsAll'
import NavbarAdmin from '../../NavbarAdmin';


export const Fooditems = ({category}) => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div>
      <NavbarAdmin/>
    <div className='Categories  backdrop-blur-sm'>
    
    <FooditemsAll category={category} />
   

    </div>
    </div>
  )
}

export default Fooditems;