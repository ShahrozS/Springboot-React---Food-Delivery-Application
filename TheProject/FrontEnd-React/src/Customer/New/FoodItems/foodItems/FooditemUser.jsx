import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { token } from '../../../../config';

export const FoodUser = ({orderid,fooditem,category}) => {
  const [quantity, setQuantity] = useState(0);
  const[foodid , setFoodid] = useState(fooditem.food_id);
  const[orderidd , setOrderidd] = useState(orderid);

 
  const addItem = e=>{
   
    console.log(fooditem);
    console.log(orderid)
    const details = {

      food_id :  fooditem.food_id,  
      quantity : quantity,
      order_id_order_id : orderidd,




    }


    if(quantity>0){

    
    fetch(`http://localhost:8090/cart/addItem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(details),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Item added to card");
        } else {
          console.log("Failed to add the item");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    }
    else{
      console.log("ENTER QUANTITY");
    }


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