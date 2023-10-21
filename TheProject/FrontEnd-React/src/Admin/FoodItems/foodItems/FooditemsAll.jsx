import React, { useState } from 'react'

import FoodItems, { Food } from './fooditem';

export  function FooditemsAll() {
  

  //isme db se samaaan ayega  
  const[fooditems , setfooditems] = useState([
    {name:"Contiental" , price:"24 Rs"} ,
    {name:"Contiental" , price:"24 Rs"} ,
    {name:"Contiental" , price:"24 Rs"} ,
    {name:"Contiental" , price:"24 Rs"} ,

  ]);
  
    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black'>All Food Items in </h1>
    <div><button className='text-white bg-lightdark p-3 text-md font-semibold mb-4 rounded-lg '>Add New Item</button></div>

{
  fooditems.length > 0 ? fooditems.map(item=>(
    <Food  fooditem={item} />
      )):"No Items"
}



    </div>


  ) 
}

export default FooditemsAll;