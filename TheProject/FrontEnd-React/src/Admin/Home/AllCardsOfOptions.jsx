

import React, { useState } from 'react'

import CardsOfOptions from './CardsOfOptions';

import { Link } from 'react-router-dom';
export  function AllCardsOfOptions() {
  

  //isme db se samaaan ayega  

  const name1 = "Manage Categories";
  const name2 = "Manage Food Items";
  const name3 = "Manage Orders";
  const name4 = "Manage Users";
  const name5 = "Manage Delivery Guys";

    return ( 
<div className="grid w-54 h-34 grid-cols-2 gap-5 gap-x-5  p-4 h-full justify-center items-center">

<Link to="/admin/home/Categories"><CardsOfOptions option={name1}/>  </Link>


<Link to="/admin/home/FoodItems"><CardsOfOptions option={name2}/> </Link>
<Link to="/admin/home/AllOrders"><CardsOfOptions option={name3}/></Link>
<Link to="/admin/home/Users"><CardsOfOptions option={name4}/></Link>
<Link to="/admin/DeliveryGuy"><CardsOfOptions option={name5}/></Link>

    
    </div>


  ) 
}

export default AllCardsOfOptions;