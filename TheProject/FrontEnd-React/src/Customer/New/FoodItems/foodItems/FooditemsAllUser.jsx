import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import FoodUser from './FooditemUser';
import { token } from '../../../../config';

export  function FooditemsAllUser({category}) {
  

  //isme db se samaaan ayega  
  const[fooditems , setfooditems] = useState([
  ]);
  
  useEffect(() => {
    // Fetch categories from the Spring Boot backend
    fetch(`http://localhost:8090/user/home/FoodItems/${category}/ShowAll` , {
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
          throw new Error('Failed to fetch categories.');
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
      <div>
      <h1 className=' mb-12 font-semibold text-4xl text-black'>All Food Items in {category  } </h1>
    <div className='flex justify-center items-center '>
        

    <div className='fooditem grid grid-cols-2 justify-center items-center '> 

{
  
  fooditems.length > 0 ? fooditems.map(item=>(
    <FoodUser   fooditem={item} category={category} />
      )):"No Items"
}

</div> 

    </div>

    </div>
  ) 
}

export default FooditemsAllUser;