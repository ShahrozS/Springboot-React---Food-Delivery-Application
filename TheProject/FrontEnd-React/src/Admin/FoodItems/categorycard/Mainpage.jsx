import React from 'react'

import NavbarAdmin from '../../Navbar';
import AllCardsOfCategory from './AllCardsOfCategory';

export  function Mainpage  () {
 
   
  return (
  <div className="text-center items-center">
     <NavbarAdmin/>
     <h1 className="text-center text-7xl text-black font-semibold m-10 ">Select A Category</h1>
     <div className="  gap-12 p-9  m-22 backdrop-blur-sm">

    <AllCardsOfCategory/>
     

    </div>

  </div>
    )
 
}

export default Mainpage;