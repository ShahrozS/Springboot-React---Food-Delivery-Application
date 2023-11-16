import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { token } from '../../config';
import { DeliveryGuyItem } from './DeliveryGuyItem';



export  function DeliveryBoysAll({}) {
  

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
    <div><h1 className=' mb-4 font-semibold text-4xl text-black'>All Delivery Guys </h1>
    <Link to={`/admin/DeliveryGuy/addNewDeliveryGuy`}>
    <div><button className='text-white bg-lightdark p-3 text-md font-semibold mb-4 rounded-lg '>Add New Delivery Guy</button></div>
    </Link>
{
  DeliveryBoys.length > 0 ? DeliveryBoys.map(item=>(
    <DeliveryGuyItem   DeliveryGuy={item} />
      )):"No Delivery Boys"
}



    </div>


  ) 
}

export default DeliveryBoysAll;