import React from 'react'

import  { AllCardsOfOptions } from './AllCardsOfOptions';
import Navigation from './Navbar';
import { token } from '../../../config';

export  function UserHome  () {
 
   

const username = token.username;
  return (
  <div className="">
 <Navigation/>
      
     <h1 className="text-center text-8xl text-black  font-extrabold m-12">Welcome {$username}</h1>
     <div class="flex  justify-center items-center mt-12">

    <AllCardsOfOptions/>
     

    </div>

  </div>
    )
 
}

export default UserHome;