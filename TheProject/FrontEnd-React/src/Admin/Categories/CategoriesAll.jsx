import React, { useState } from 'react'
import { CategoryItem } from './CategoryItem';

export  function CategoriesAll() {
  

  //isme db se samaaan ayega  
  const[categories , setCategories] = useState([
    {name:"Contiental"},
   
    {name:"Chinease Rice"}
  ]);
  
    return ( 
    <div><h1 className=' mb-4 font-semibold text-4xl text-black '>All categories</h1>
{
  categories.length > 0 ? categories.map(item=>(
    <CategoryItem  category={item} />
      )):"No categories"
}



    </div>


  ) 
}

export default CategoriesAll;