import React , {useState} from 'react'

import NavbarAdmin from '../NavbarAdmin'
import { UsersAll } from './UsersAll';


export const Users = () => {

// const {categories,setTodos}= useState([

// ]);


  return (

    <div>
      <NavbarAdmin/>
    <div className='Categories backdrop-blur-sm'>
      
    
    <UsersAll/>
    
   

    </div>
    </div>
  )
}

export default Users;