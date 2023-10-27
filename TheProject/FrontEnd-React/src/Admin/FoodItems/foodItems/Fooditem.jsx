import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { token } from '../../../config';
export const Food = ({fooditem,category}) => {
 
 
  const DeleteCategory = e=>{
    fetch(`http://localhost:8090/admin/home/FoodItems/${category}/ShowAll/${fooditem.food_id}`, {
        method: 'DELETE',
        headers:{
          'Authorization' : `Bearer ${token}`
        } 
      }).then((response)=>{
        if(response.ok){
          console.log(`Food with name: ${fooditem.food_name} id: ${fooditem.food_id}deleted Successfuly`)
          window.location.reload();

        }else{
          console.error(`Failed to delete ${fooditem.food_id}`);
        }
      }).catch((error) =>{
        console.error('Error:' , error);
      });
      console.log('Refresh key updated')
      setRefreshKey(refreshKey+1);

      window.location.reload();
  };
  
 
 
 
  return (
    <div className='category'>
        <p>{fooditem.food_name}    {fooditem.price} </p>
        <div>
            <FontAwesomeIcon icon={faTrash} onClick={DeleteCategory} className=' hover:cursor-pointer' />
        </div>
    </div>
  )
}
export default Food;