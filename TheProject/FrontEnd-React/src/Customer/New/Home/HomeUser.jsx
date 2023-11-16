import React from 'react'

import { token, username } from '../../../config';
import AllCardsOfOptionsUser from './AllCardsOfOptionsUsers';
import NavigationUser from './NavbarUser';
import { useParams } from 'react-router-dom';

export  function UserHome  () {
 
  const {orderid} = useParams();
   
console.log(orderid);
const username2 = username;

return (
  <div className="">
 <NavigationUser/>
      
     <h1 className="text-center text-8xl text-black  font-extrabold m-12">Welcome {username2} {}</h1>
     <div class="flex  justify-center items-center mt-12">

    <AllCardsOfOptionsUser orderid={orderid}/>
     

    </div>

  </div>
    )
 
}

export default UserHome;