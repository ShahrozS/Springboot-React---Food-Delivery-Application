import React, { useEffect, useState } from 'react'
import { UserItem } from './UserItem';
const token = localStorage.getItem('jwtToken');
export  function UsersAll() {
  

  //isme db se samaaan ayega  
  const[orders , setOrders] = useState([
   
  ]);
  

let count = 0 ; 
// Fetching now
useEffect(() => {
  console.log("Ran " + count)
  count++; 
  // Fetch categories from the Spring Boot backend
  fetch('http://localhost:8090/admin/home/AllUsers' , {
    method: 'GET',
  headers:{
    'Authorization' : `Bearer ${token}`
  }   
  })
    .then((response) => {
      if (response.ok) {
        console.log("Token : " +token)
        console.log(response)
        return response.json(); // Assuming the response is JSON data
      } else {
        throw new Error('Failed to fetch categories.');
      }
    })
    .then((data) => {
      console.log(data)
      setOrders(data); // Update the state with fetched categories
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, []);




    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black  '>All Users in the System</h1>
      
    
      {orders.length > 0 ? (
        orders.map((item, index) => (
          <UserItem key={index} User={item} />
        ))
      ) : (
        'No orders'
      )}




    </div>


  ) 
}

export default UsersAll;