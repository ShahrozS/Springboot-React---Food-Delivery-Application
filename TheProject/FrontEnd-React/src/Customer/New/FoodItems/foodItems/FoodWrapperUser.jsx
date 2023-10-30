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

    <div>
      <NavbarUser/>
    <div className='Categories  backdrop-blur-sm '>
    
    <FooditemsAllUser orderid = {orderid} category={category} />
 

    </div>
    </div>
  )
}

export default FooditemsUser;