

import React, { useState } from 'react'
import CardsOfCategory from './CardsOfCategory';


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
    <CardsOfCategory  categoryname={item} />
      )):"No categories"
}
    </div>


  ) 
}

export default AllCardsOfCategory;