

import React, { useState } from 'react'
import CardsOfCategory from './CardsOfCategory';
import { Link } from 'react-router-dom';


export  function AllCardsOfCategory() {
  

  //isme db se samaaan ayega  
  const[cards , setCards] = useState([
    {name:"Contiental"},
    {name:"Chinease Rice"},
    {name:"Chinease Rice"},
    {name:"Chinease Rice"},
    {name:"Chinease Rice"},
    {name:"Chinease Rice"},
    {name:"Chinease Rice"}
  ]);
  
    return ( 
        <div className="grid grid-cols-3 gap-4 p-4">
{
  cards.length > 0 ? cards.map(item=>(
    <Link to={`/admin/home/FoodItems/${item.name}/ShowAll`}>
    <CardsOfCategory  categoryname={item} />
    </Link>
      
      )):"No categories"
}
    </div>


  ) 
}

export default AllCardsOfCategory;