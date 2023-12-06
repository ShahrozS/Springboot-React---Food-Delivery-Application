import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const token = localStorage.getItem('jwtToken');

import { useNavigate } from 'react-router-dom';
    

export const UserItem = ({index,User}) => {
const navigateTo = useNavigate();
 const [refreshKey, setRefreshKey] = useState(0);

 const[email,setEmail] = useState("");

// useEffect(()=>{ 

//     // fetching items in card
// fetch(`http://localhost:8090/order/${Order.order_id}` , {
// method:"GET",
//     headers:{
//         'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
//         'Authorization': `Bearer ${token}`,
//     },
// }).then((response)=>{
//     if(response.ok){
//         return response.json();
//         console.log("Item is here")

//     }
//     else{
//         console.log("Failed to catch item");
//     }
// }).then((data)=>{

//   setEmail(data.user.email);
// console.log(data.user.email)

//       })
// .catch((error)=>{
//     console.log("Error : " , error);
// })






// // fetching user details

// fetch(`http://localhost:8090/user/current-user` , {
// method:"POST",
//     headers:{
//         'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
//         'Authorization': `Bearer ${token}`,
//     },
// }).then((response)=>{
//   if(response.ok){
    
//     console.log("Fetched user items")
//     return response.json();
//   }
//   else{
//     console.log("Failed to fetch user")
//   }

// }).then((data)=>{



// }).catch((error)=>{
//   console.log("Error " , error);
// })


// },[]);

 
// const dispatch = (orderid) =>{


//     navigateTo(`/admin/home/dispatch/${orderid}`)



// }


// fetch(`http://localhost:8090/order/${Order.order_id}` , {
// method:"GET",
//     headers:{
//         'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
//         'Authorization': `Bearer ${token}`,
//     },
// }).then((response)=>{
//     if(response.ok){
//         return response.json();
//         console.log("Item is here")

//     }
//     else{
//         console.log("Failed to catch item");
//     }
// }).then((data)=>{

//   setEmail(data.user.email);
// console.log(data.user.email)

//       })
// .catch((error)=>{
//     console.log("Error : " , error);
// })


const deleteUser = (userid) =>{






// // fetching user details

fetch(`http://localhost:8090/admin/home/deleteUser/${userid}` , {
method:"Delete",
    headers:{
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`,
    },
}).then((response)=>{
  if(response.ok){
    
    console.log("User deleted" + userid);
    window.location.reload();

        return response.json();

  }
  else{
    console.log("Failed to fetch user")
  }

}).then((data)=>{

console.log(data , " after delete");

}).catch((error)=>{
  console.log("Error " , error);
})





}




  return (
    <div className='categoryorder'>
      
        <p>{User.user_id}  : {User.email}</p>
        <div>
            <button onClick={()=>{deleteUser(User.user_id)}}className='w-20 p-1 bg-red rounded-lg text-black hover:bg-white '>Remove</button>
        </div>
    </div>
  )
}
