import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const token = localStorage.getItem('jwtToken');


export const CategoryItem = ({index,category}) => {
 console.log(category.name);
 const [refreshKey, setRefreshKey] = useState(0);

 const DeleteCategory = e=>{
  fetch(`http://localhost:8090/admin/home/Categories/${category.id}`, {
      method: 'DELETE',
      headers:{
        'Authorization' : `Bearer ${token}` 
      } 
      
    }).then((response)=>{
      if(response.ok){
        console.log(`Category with name: ${category.name} id: ${category.id}deleted Successfuly`)
      }else{
        console.error(`Failed to delete ${category.id}`);
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
      
        <p>{category.name}</p>
        <div>
            <FontAwesomeIcon onClick={DeleteCategory} className=' hover:cursor-pointer' icon={faTrash}/>
        </div>
    </div>
  )
}
