import React, { useEffect, useState } from 'react'
import { token } from '../../../config';
import { DispatchingDeliveryBoyItem } from './DispatchingDeliveryBoyItem';

export  function DispatchingDeliveryBoysAll({orderidd}) {
  

  //isme db se samaaan ayega  
  const[DeliveryBoys , setDeliveryBoys] = useState([
  ]);
  
  useEffect(() => {
    // Fetch categories from the Spring Boot backend
    fetch(`http://localhost:8090/DeliveryBoys` , {
      method: 'GET',
      headers:{
        'Authorization' : `Bearer ${token}`
      } 
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Assuming the response is JSON data
        } else {
          console.log(response)
          throw new Error('Failed to fetch DeliveryGuy.');
        }
      })
      .then((data) => {
        console.log(data)
        setDeliveryBoys(data); // Update the state with fetched categories
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
   



    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black'>All Delivery Guys  </h1>
    
{
  DeliveryBoys.length > 0 ? DeliveryBoys.map(item=>(
    <DispatchingDeliveryBoyItem  orderid={orderidd} DeliveryGuy={item} />
      )):"No Delivery Boys"
}



    </div>


  ) 
}

export default DispatchingDeliveryBoysAll;