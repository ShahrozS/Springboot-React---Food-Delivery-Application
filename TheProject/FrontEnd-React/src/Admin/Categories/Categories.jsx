import React , {useState} from 'react'
import { CategoryForm } from './CategoryForm'
import CategoriesAll from './CategoriesALl'
import NavbarAdmin from '../NavbarAdmin'


export const Categories = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div className='backdrop-blur-sm'>
      <NavbarAdmin/>
    <div className='Categories backdrop-blur-sm'>
      
    
    <CategoriesAll/>
    <CategoryForm/>
   

    </div>
    </div>
  )
}

export default Categories;