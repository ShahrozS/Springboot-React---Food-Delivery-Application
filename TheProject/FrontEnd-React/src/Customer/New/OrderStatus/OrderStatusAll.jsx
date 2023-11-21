import React, { useEffect, useState } from 'react'

import { OrderStatusitem } from './OrderStatusItem';
import getUserByUsername from '../Util/GettingAUser';

export  function OrderStatusAll() {
  

  //isme db se samaaan ayega  
  const[orders , setOrders] = useState([
   
  ]);


  const [userid,setUserid] = useState('');
 
  const token = localStorage.getItem('token');




  const username = localStorage.getItem('username');

  getUserByUsername(username)
  .then((user) => {
    console.log('User data in previous order :', user.user_id);
    setUserid(user.user_id);
  })
  .catch((error) => {
    console.error('Error fetching user:', error);
  });



let count = 0 ; 
// Fetching now
console.log("User id about to fetch before useeffect: " + userid)
useEffect(() => {

 console.log(" about to fetch the previos order of " + userid);
  console.log("Ran " + count)
  count++; 
  // Fetch categories from the Spring Boot backend
  fetch(`http://localhost:8090/order/previousorders/${userid}` , {
    method: 'GET',
  headers:{
    'Authorization' : `Bearer ${token}`
  }   
  })
    .then((response) => {
      if (response.ok) {
      
        return response.json(); // Assuming the response is JSON data
      } else {
        throw new Error('Failed to fetch orders.');
      }
    })
    .then((data) => {
      console.log("orders byss " + userid +" :"+data)
      setOrders(data); // Update the state with fetched categories
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [userid]);




    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black  '>Previous orders from {username}</h1>
      
    
      {orders.length > 0 ? (
        orders.map((item, index) => (
          <OrderStatusitem key={index} Order={item} />
        ))
      ) : (
        'No orders'
      )}




    </div>


  ) 
}

export default OrderStatusAll;