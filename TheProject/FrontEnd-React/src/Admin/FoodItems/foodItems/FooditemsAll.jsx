import React, { useState } from 'react'

import FoodItems, { Food } from './fooditem';
import { Link } from 'react-router-dom';

export  function FooditemsAll({category}) {
  

  //isme db se samaaan ayega  
  const[fooditems , setfooditems] = useState([
    {name:"Contiental" , price:"24 Rs"} ,
    {name:"Contiental" , price:"24 Rs"} ,
    {name:"Contiental" , price:"24 Rs"} ,
    {name:"Contiental" , price:"24 Rs"} ,

  ]);
  
    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black'>All Food Items in </h1>
    <Link to={`/admin/home/FoodItems/${category}/ShowAll/addItem`}>
    <div><button className='text-white bg-lightdark p-3 text-md font-semibold mb-4 rounded-lg '>Add New Item</button></div>
    </Link>
{
  fooditems.length > 0 ? fooditems.map(item=>(
    <Food  fooditem={item} />
      )):"No Items"
}



    </div>


  ) 
}

export default FooditemsAll;