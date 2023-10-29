import React , {useState} from 'react'


import FooditemsAll, { FooditemsAllUser } from './FooditemsAllUser'
import NavbarUser from '../../NavbarUser';


export const FooditemsUser = ({category}) => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div>
      <NavbarUser/>
    <div className='Categories  backdrop-blur-sm '>
    
    <FooditemsAllUser category={category} />
 

    </div>
    </div>
  )
}

export default FooditemsUser;