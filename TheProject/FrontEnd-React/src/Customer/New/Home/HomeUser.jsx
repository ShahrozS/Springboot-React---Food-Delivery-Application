import React from 'react'

const token = localStorage.getItem('jwtToken');
import AllCardsOfOptionsUser from './AllCardsOfOptionsUsers';
import NavigationUser from './NavbarUser';
import { useParams } from 'react-router-dom';
import NavbarUserWithoutCart from '../navbar/NavBarWithoutCart';

export  function UserHome  () {
 


const orderid = localStorage.getItem('orderid');
console.log("orderid when option page: " , orderid);
  

const username2 = localStorage.getItem('username');


return (
  <div className="backdrop-blur-sm">
<NavbarUserWithoutCart/>
      
     <h1 className="text-center text-8xl text-black  font-extrabold m-12">Welcome {username2} {}</h1>
     <div className="flex  justify-center items-center mt-12 mb-12">

    <AllCardsOfOptionsUser />
     

    </div>
<p className='mt-52'>,</p>
  </div>
    )
 
}

export default UserHome;