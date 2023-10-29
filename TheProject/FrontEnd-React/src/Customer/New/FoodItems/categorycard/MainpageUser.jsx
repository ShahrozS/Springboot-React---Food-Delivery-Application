import React from 'react'

import { AllCardsOfCategoryUser } from './AllCardsOfCategoryUser';
import NavbarUser from '../../NavbarUser';

export  function MainpageUser  () {
 
   
  return (
  <div className="text-center items-center">
     <NavbarUser/>
     <h1 className="text-center text-7xl text-black font-semibold m-10 ">Select A Category</h1>
     <div className="  gap-12 p-9  m-22 backdrop-blur-sm">

    <AllCardsOfCategoryUser/>
     

    </div>

  </div>
    )
 
}

export default MainpageUser;