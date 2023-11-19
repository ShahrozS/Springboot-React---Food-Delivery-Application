import React from 'react'

import { token, username } from '../../../config';
import AllCardsOfOptionsUser from './AllCardsOfOptionsUsers';
import NavigationUser from './NavbarUser';
import { useParams } from 'react-router-dom';

export  function UserHome  () {
 

const orderid = localStorage.getItem('orderid');
  
console.log(orderid);
const username2 = username;


return (
  <div className="">
 <NavigationUser/>
      
     <h1 className="text-center text-8xl text-black  font-extrabold m-12">Welcome {username2} {}</h1>
     <div className="flex  justify-center items-center mt-12">

    <AllCardsOfOptionsUser />
     

    </div>

  </div>
    )
 
}

export default UserHome;