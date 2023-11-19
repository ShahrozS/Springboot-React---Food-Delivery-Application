import React, { useEffect, useRef, useState } from 'react'

import { AllCardsOfCategoryUser } from './AllCardsOfCategoryUser';
import NavbarUser from '../../navbar/NavbarUser';
import { useParams } from 'react-router-dom';
import { token } from '../../../../config';

export  const MainpageUser =  () =>{
 
   //const {orderid} = useParams();
   const hasEffectRun = useRef(false);
  let count = 0 ;
  
   const [orders, setOrders] = useState('');
   const [orderid,setOrderid] = useState('');

  
   useEffect(() => { 
    

    if (!hasEffectRun.current) {
      console.log("Ran");
      hasEffectRun.current = true;

const createOrder = () =>{fetch(`http://localhost:8090/user/home/GenerateOrder` , {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,

    },
    
  }).then((response)=>{

    if(response.ok){
      return response.json();
    }
    else{
      console.log("Failure in generating order id")
    }
  }).then((data) =>{

  
   setOrders(data);
   setOrderid(data.order_id);
 
   console.log("Saving this order id in storage: " + data.order_id);
      localStorage.setItem('orderid',data.order_id);
     
  
    
    })
  .catch((error)=>{
    console.log(`Errir :` ,error);
  }) 
}

 createOrder();
}
},[]);

  console.log("Order after Order food card is clicked "  +orders+" " + orderid )

console.log("outside useEffect " + count);
count++;

  return (
  
  <div className="text-center items-center">
     <NavbarUser/>
     <h1 className="text-center text-7xl text-black font-semibold m-10 ">Select A Category</h1>
     <div className="  gap-12 p-9  m-22 backdrop-blur-sm">

    <AllCardsOfCategoryUser orderid={orderid} />
     

    </div>

  </div>
    )
 
}

export default MainpageUser;