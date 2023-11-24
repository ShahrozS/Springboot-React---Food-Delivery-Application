import React , {useState} from 'react'


import FooditemsAll, { FooditemsAllUser } from './FooditemsAllUser'
import NavbarUser from '../../navbar/NavbarUser';
import { useParams } from 'react-router-dom';


export const FooditemsUser = ({category}) => {

  const {orderid} = useParams();
  console.log("food mai" + orderid);
// const {categories,setTodos}= useState([

// ]);


  return (

    <div className='backdrop-blur-sm'>
      <NavbarUser/>
    <div className='Categories   '>
    
    <FooditemsAllUser orderid = {orderid} category={category} />
 

    </div>
    </div>
  )
}

export default FooditemsUser;