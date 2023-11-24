import React from 'react'

import NavbarAdmin from '../../NavbarAdmin';
import AllCardsOfCategory from './AllCardsOfCategory';

export  function Mainpage  () {
 
   
  return (
  <div className="text-center items-center backdrop-blur-sm">
     <NavbarAdmin/>
     <h1 className="text-center text-5xl text-black font-semibold m-10 ">Select A Category</h1>
     <div className="  gap-12 p-9  m-22 backdrop-blur-sm">

    <AllCardsOfCategory/>
     

    </div>
<span className=' mt-52'>.</span>
  </div>
    )
 
}

export default Mainpage;