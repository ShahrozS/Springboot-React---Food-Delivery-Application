import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {  token } from '../../config';

export const DeliveryGuyItem = ({index,DeliveryGuy}) => {
    console.log(DeliveryGuy.name);
    const [refreshKey, setRefreshKey] = useState(0);

    const DeleteCategory = e=>{
    fetch(`http://localhost:8090/DeliveryBoys/delete/${DeliveryGuy.delivery_Guy_id}`, {
        method: 'DELETE',
        headers:{
            'Authorization' : `Bearer ${token}` 
        } 
        
        }).then((response)=>{
        if(response.ok){
            console.log(`Delivery guy  with name: ${DeliveryGuy.name} id: ${DeliveryGuy.id}deleted Successfuly`)
        }else{
            console.error(`Failed to delete ${DeliveryGuy.id}`);
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
        
            <p>{DeliveryGuy.name}</p>
            <div>
                <FontAwesomeIcon onClick={DeleteCategory} className=' hover:cursor-pointer' icon={faTrash}/>
            </div>
        </div>
    )
}
