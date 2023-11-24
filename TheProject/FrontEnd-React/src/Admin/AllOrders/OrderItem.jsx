import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {  token } from '../../config';
import { useNavigate } from 'react-router-dom';
    

export const OrderItem = ({index,Order}) => {
const navigateTo = useNavigate();
 const [refreshKey, setRefreshKey] = useState(0);

 const[email,setEmail] = useState("");
console.log(Order.user.email)
useEffect(()=>{
  setEmail(Order.user.email);

},[])
// useEffect(()=>{ 

//   fetch(`http://localhost:8090/order/${Order.order_id}` , {
//     method: 'GET',
//   headers:{
//     'Authorization' : `Bearer ${token}`
//   }   
//   })
//     .then((response) => {
//       if (response.ok) {
       
//         return response.json(); // Assuming the response is JSON data
//       } else {
//         throw new Error('Failed to fetch categories.');
//       }
//     })
//     .then((data) => {
//       console.log("order : " +JSON.stringify(data))
//        // Update the state with fetched categories
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//     // fetching items in card
// // fetch(`` , {
// // method:"GET",
// //     headers:{
// //         'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
// //         'Authorization': `Bearer ${token}`,
// //     },
// // }).then((response)=>{
// //     if(response.ok){
// //         return response.json();
  

// //     }
// //     else{
// //         console.log("Failed to catch item");
// //     }
// // }).then((data)=>{
// //   console.log("order : "+data);
// //   setEmail();

// // })
// // .catch((error)=>{
// //     console.log("Error : " , error);
// // })






// // fetching user details
// // here was current user idk why

// },[]);

 
const dispatch = (orderid) =>{


    navigateTo(`/admin/home/dispatch/${orderid}`)



}






  return (
    <div className='categoryorder'>
      
        <p>Order no. {Order.order_id}  By  {email}</p>
        <div>
            <button onClick={()=>{dispatch(Order.order_id)}} className='w-20 p-1 bg-red rounded-lg text-black hover:bg-white '>Dispatch</button>
        </div>
    </div>
  )
}
