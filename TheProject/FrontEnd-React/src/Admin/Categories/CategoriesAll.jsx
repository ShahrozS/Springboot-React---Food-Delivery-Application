import React, { useEffect, useState } from 'react'
import { CategoryItem } from './CategoryItem';

export  function CategoriesAll() {
  

  //isme db se samaaan ayega  
  const[categories , setCategories] = useState([
   
  ]);
  

// Fetching now
useEffect(() => {
  // Fetch categories from the Spring Boot backend
  fetch('http://localhost:8090/admin/home/Categories' , {
    method: 'GET',
   
  })
    .then((response) => {
      if (response.ok) {
        console.log(response)
        return response.json(); // Assuming the response is JSON data
      } else {
        throw new Error('Failed to fetch categories.');
      }
    })
    .then((data) => {
      console.log(data)
      setCategories(data); // Update the state with fetched categories
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, []);




    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black '>All categories</h1>
      {categories.length > 0 ? (
        categories.map((item, index) => (
          <CategoryItem key={index} category={item} />
        ))
      ) : (
        'No categories'
      )}




    </div>


  ) 
}

export default CategoriesAll;