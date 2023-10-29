

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardsOfCategoryUser from './CardsOfCategoryUser';
import { token } from '../../../../config';


export  function AllCardsOfCategoryUser() {
  

  //isme db se samaaan ayega  
  const[cards , setCards] = useState([
    
  ]);

  useEffect(() => {
    // Fetch categories from the Spring Boot backend
    fetch('http://localhost:8090/user/home/Categories' , {
      method: 'GET',
    headers:{
      'Authorization' : `Bearer ${token}`
    }   
    })
      .then((response) => {
        if (response.ok) {
          console.log("Token : " + token)
          console.log(response)
          return response.json(); // Assuming the response is JSON data
        } else {
          throw new Error('Failed to fetch categories.');
        }
      })
      .then((data) => {
        console.log(data)
        setCards(data); // Update the state with fetched categories
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  
    return ( 
        <div className="grid grid-cols-3 gap-4 p-4">
{
  cards.length > 0 ? cards.map(item=>(
    <Link to={`/user/home/FoodItems/${item.name}/ShowAll`}>
    <CardsOfCategoryUser  categoryname={item} />
    </Link>
      
      )):"No categories"
}
    </div>


  ) 
}

export default AllCardsOfCategoryUser;