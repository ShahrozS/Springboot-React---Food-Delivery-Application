import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Description } from '@mui/icons-material';
const token = localStorage.getItem("jwtToken");

export const FoodUser = ({orderid,fooditem,category}) => {
  const [quantity, setQuantity] = useState(0);
  const[foodid , setFoodid] = useState(fooditem.food_id);
  const[orderidd , setOrderidd] = useState(orderid);
  

  const [isHovered, setIsHovered] = useState(false);
  const addItem = e=>{
   
    console.log(fooditem);
    console.log(orderid)
    const details = {

      food_id :  fooditem.food_id,  
      quantity : quantity,
      order_id_order_id : orderidd,




    }


    console.log(  " ABout to add this item" +details )
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
          const temp = localStorage.getItem('quantity');
          const inttemp = +temp;
          const quantity2 = +quantity;
          const inttemp2 = inttemp+quantity2;
          localStorage.setItem('quantity',inttemp2);
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

setQuantity(0);
  };
  
 
 
 
  return (
    <div className={`category2 ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <p className='text-xl font-semibold'>{fooditem.food_name}   </p>
        
        
        <div>
        <input type='number' min={0} className='w-9 h-6 text-black pt-1  pl-2 border-none outline-none'  value={quantity}
        onChange={(e) => setQuantity(e.target.value)}/>

        <FontAwesomeIcon icon={faPlus} onClick={addItem} className=' hover:cursor-pointer px-2 font-bold text-2xl' />
        </div>
        {isHovered && (
        <div className='hovered-item'>
          {/* Content of the sliding down item */}
          {/* You can add any content, styles, or components here */}
          <div className='text-black text-lg'>
            <p>{fooditem.description}</p>
                <p >Rs. {fooditem.price}</p>
                <p className='text-gray-400 text-xs'>{fooditem.ingredients}</p>
          </div>
          
      
        </div>
      )}
    </div>
  )

}
export default FoodUser;