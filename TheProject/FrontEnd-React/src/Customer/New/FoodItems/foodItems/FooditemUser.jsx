import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { token } from '../../../../config';

export const FoodUser = ({fooditem,category}) => {
  const [quantity, setQuantity] = useState(0);


 
  const addItem = e=>{
   
    const details = {

      food_id :  fooditem.food_id,  
      quantity : quantity,
      order_id_order_id : ``,




    }



    fetch(`http://localhost:8090/user/home/FoodItems/AddOrder` ,{
       method:'POST',
    header : {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,

    },
    body: JSON.stringify(details),
    }
   
    )




  };
  
 
 
 
  return (
    <div className='category2 '>
        <p>{fooditem.food_name}    {fooditem.price} </p>
        
        
        <div>
        <input type='number' min={0} className='w-9 h-6 text-black pt-1  pl-2 border-none outline-none'  value={quantity}
        onChange={(e) => setQuantity(e.target.value)}/>

        <FontAwesomeIcon icon={faPlus} onClick={addItem} className=' hover:cursor-pointer px-2 font-bold text-2xl' />
        </div>
    </div>
  )

}
export default FoodUser;