import React from 'react'

import  { AllCardsOfOptions } from './AllCardsOfOptions';
import Navigation from './Navbar';

export  function AdminHome  () {
 
   
  return (
  <div className="">
 <Navigation/>
      
     <h1 className="text-center text-8xl text-black  font-extrabold m-12">Welcome Admin!</h1>
     <div class="flex  justify-center items-center mt-12">

    <AllCardsOfOptions/>
     

    </div>

  </div>
    )
 
}

export default AdminHome;