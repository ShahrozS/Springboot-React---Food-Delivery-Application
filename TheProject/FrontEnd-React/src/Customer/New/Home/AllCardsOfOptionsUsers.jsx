

import React, { useState } from 'react'


import { Link } from 'react-router-dom';
import CardsOfOptionsUser from './CardsOfOptionsUser';
export  function  AllCardsOfOptionsUser({}) {
  

  //isme db se samaaan ayega  

  const name1 = "Order Food";
  const name2 = "Previous Orders";
  const name3 = "Manage Account";
  const name4 = "Order Status";
  const name5 = "Write a review";
  const name6="Previous Reviews";
const orderid = localStorage.getItem('orderid');
  console.log("Order id in the cards of option "  + orderid);
    return ( 
<div className="grid w-54 h-34 grid-cols-3 gap-5 gap-x-5  p-4 h-full justify-center items-center">

<Link to={`/user/home/FoodItems`}><CardsOfOptionsUser orderid = {orderid}  option={name1}/>  </Link>


<Link to="/user/home/previousorder"><CardsOfOptionsUser option={name2}/> </Link>
<Link to="/user/home/manageaccount"><CardsOfOptionsUser option={name3}/></Link>
<Link to="/user/home/orderstatus"><CardsOfOptionsUser option={name4}/></Link>
<Link to="/user/home/review"><CardsOfOptionsUser option={name5}/></Link>
<Link to="/user/home/previousreviews"><CardsOfOptionsUser option={name6}/></Link>
    
    
    </div>


  ) 
}

export default AllCardsOfOptionsUser;