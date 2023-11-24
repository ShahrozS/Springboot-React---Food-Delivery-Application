import React, { useEffect, useRef, useState } from 'react'

import { AllCardsOfCategoryUser } from './AllCardsOfCategoryUser';
import NavbarUser from '../../navbar/NavbarUser';
import { useParams } from 'react-router-dom';

export  const MainpageUser =  () =>{
 
const token = localStorage.getItem('jwtToken');
const [username, setUsername] = useState('');

useEffect(() => {
  const storedUsername = localStorage.getItem('username');
  setUsername(storedUsername || ''); 

}, [])
   //const {orderid} = useParams();
   const hasEffectRun = useRef(false);
  let count = 0 ;
  
   const [orders, setOrders] = useState('');
   const [orderid,setOrderid] = useState('');


const [Message,setMessage] = useState('');
   const createOrder = e =>{
    localStorage.setItem("orderid", "");
    localStorage.setItem("quantity" ,0);
    fetch(`http://localhost:8090/user/home/GenerateOrder/${username}` , {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
  
      },
      
    }).then((response)=>{
  
      if(response.ok){
        count =1 ;
        console.log("Generated order for : " + username )
        setMessage("Order is Started, Select your items..");
        return response.json();
      }
      else{
        console.log("Failure in generating order id")
      }
    }).then((data) =>{
  
      console.log("Order generated: " + JSON.stringify(data));
    
     setOrders(data);
     setOrderid(data.order_id);
 
   
   console.log("Saving this order id in storage: " + data.order_id);
        localStorage.setItem('orderid',data.order_id);
       const insertedorderid = localStorage.getItem('orderid');
       console.log("Orderid in the local storage just saved: " , insertedorderid);
  
    
      
      })
    .catch((error)=>{
      console.log(`Errir :` ,error);
    })     
   }

//    useEffect(() => { 
    

//     if (!hasEffectRun.current) {
//       console.log("Ran " + username);
//       hasEffectRun.current = true;

// const createOrder = () =>{fetch(`http://localhost:8090/user/home/GenerateOrder/${username}` , {
//     method : 'POST',
//     headers : {
//       'Content-Type': 'application/json',
//       'Authorization' : `Bearer ${token}`,

//     },
    
//   }).then((response)=>{

//     if(response.ok){
//       return response.json();
//     }
//     else{
//       console.log("Failure in generating order id")
//     }
//   }).then((data) =>{

//     console.log("Order generated: " + JSON.stringify(data));
  
//    setOrders(data);
//    setOrderid(data.order_id);
 
//    console.log("Saving this order id in storage: " + data.order_id);
//       localStorage.setItem('orderid',data.order_id);
//      const insertedorderid = localStorage.getItem('orderid');
//      console.log("Orderid in the local storage just saved: " , insertedorderid);

  
    
//     })
//   .catch((error)=>{
//     console.log(`Errir :` ,error);
//   }) 
// }

//  createOrder();
// }
// },[]);

  console.log("Order after Order food card is clicked "  +orders+" " + orderid )

console.log("outside useEffect " + count);
count++;

  return (

  <div className="text-center items-center backdrop-blur-sm">
     <NavbarUser orderid = {orderid}/>
     <h1 className="text-center text-5xl text-black font-semibold m-10 ">Select A Category</h1>
     <div className="  gap-12 p-9   m-22 ">
     <button onClick={createOrder} className=' flex ml-5 items-center mr-3  left-0  w-44 h-12 rounded-lg bg-black justify-center text-white font-semibold text-xl'>
   Start an order
    </button>
    <p className='text-xl font-bold text-black'>{Message}</p>
    
 <AllCardsOfCategoryUser order_id={orderid} />
 
     

    </div>

  </div>

    )
 setMessage("");
}

export default MainpageUser;