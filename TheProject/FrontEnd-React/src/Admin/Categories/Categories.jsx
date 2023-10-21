import React , {useState} from 'react'
import { CategoryForm } from './CategoryForm'
import CategoriesAll from './CategoriesALl'
import NavbarAdmin from '../Navbar'


export const Categories = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div>
      <NavbarAdmin/>
    <div className='Categories backdrop-blur-sm'>
      
    
    <CategoriesAll/>
    <CategoryForm/>
   

    </div>
    </div>
  )
}

export default Categories;