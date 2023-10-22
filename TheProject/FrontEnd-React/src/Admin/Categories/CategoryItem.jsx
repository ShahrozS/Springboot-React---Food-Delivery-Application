import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const CategoryItem = ({index,category}) => {
 console.log(category.name);
 const [refreshKey, setRefreshKey] = useState(0);

 const DeleteCategory = e=>{
  fetch(`http://localhost:8090/admin/home/Categories/${category.category_id}`, {
      method: 'DELETE',
    }).then((response)=>{
      if(response.ok){
        console.log(`Category with name: ${category.category_name} id: ${category.category_id}deleted Successfuly`)
      }else{
        console.error(`Failed to delete ${category.category_id}`);
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
      
        <p>{category.category_name}</p>
        <div>
            <FontAwesomeIcon onClick={DeleteCategory} className=' hover:cursor-pointer' icon={faTrash}/>
        </div>
    </div>
  )
}
