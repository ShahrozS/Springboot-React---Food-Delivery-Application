import React, { useEffect, useState } from 'react'

import  { Food } from './fooditem';
import { Link } from 'react-router-dom';
import { token } from '../../../config';

export  function FooditemsAll({category}) {
  

  //isme db se samaaan ayega  
  const[fooditems , setfooditems] = useState([
  ]);
  
  useEffect(() => {
    // Fetch categories from the Spring Boot backend
    fetch(`http://localhost:8090/admin/home/FoodItems/${category}/ShowAll` , {
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
          throw new Error('Failed to fetch Food items.');
        }
      })
      .then((data) => {
        console.log(data)
        setfooditems(data); // Update the state with fetched categories
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  



    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black'>All Food Items in </h1>
    <Link to={`/admin/home/FoodItems/${category}/ShowAll/addItem`}>
    <div><button className='text-white bg-lightdark p-3 text-md font-semibold mb-4 rounded-lg '>Add New Item</button></div>
    </Link>
{
  fooditems.length > 0 ? fooditems.map(item=>(
    <Food  fooditem={item} category={category} />
      )):"No Items"
}



    </div>


  ) 
}

export default FooditemsAll;