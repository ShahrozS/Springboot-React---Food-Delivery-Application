/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getUserByUsername from '../Util/GettingAUser';
import NavbarUserWithoutCart from '../navbar/NavBarWithoutCart';

export default function ManageAccount() {

   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const[confirmpassword,setConfirmpassword] = useState('');
  const [message, setMessage] = useState('');


  const [user,setUser] = useState('');

  useEffect(()=>{
    console.log("Hi")
  getUserByUsername().then((data)=>{
    console.log(data);
    setFirstname(data.first_name);
    setLastname(data.last_name);
    setPhonenumber(data.phone_number);
    setAddress(data.address);
    setEmail(data.email);
  setUser(data);
  }).catch((error)=>{
    console.log("Error: " , error);
  })
  },[])
  

const handleSubmit = e =>{
  e.preventDefault()
  const data = {
    email:email,
    password:password,
    first_name:firstname,
    last_name:lastname,
    phone_number:phonenumber,
    address:address,
    is_Admin:0
    
    }



console.log("passswrod same")
setMessage('')

fetch(`http://localhost:8090/user/update-user/${user.user_id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',

        
  },
  body: JSON.stringify(data),
}).then((response) =>{
  if(response.ok){

    console.log('User Created');
    setMessage("User details edited.")
  }
  else{
    console.error('User Not created');
  }
}).catch((error)=>{
  console.error('Error:',error);
})






}




function cancel(){
  setEmail('')
  setAddress('')
  setConfirmpassword('')
  setFirstname('')
  setLastname('')
  setPassword('')
  setMessage('')
  setPhonenumber('')
}


  return (
    <div>
    <NavbarUserWithoutCart/>
    <div className='flex h-screen p-44 pt-10 pl-4 backdrop-blur-sm justify-center '>


    <form onSubmit={handleSubmit} className=''>
      <div className="space-y-12 p-10">
     

        <div className="border-b border-gray-900/10 pb-12">
   
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
              Edit Your Details
            </h2>     
            
            <span
    className=' flex  justify-center items-start  text-lg font-semibold text-red text-center ml-8' 
    value={message}
    onChange={(e) =>setMessage(e.target.value)}
    >{message}</span>
                 <p className="mt-1 text-sm leading-6 pt-4 text-gray-600">Use a permanent address where you can receive your Order.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input 
                  type="text"
                  name="first-name"
                  id="first-name"
                 
                  autoComplete="given-name"
                  value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
          
                  value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  autoComplete="family-name"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
              
                  name="email"
                  type="Text"
                  autoComplete="email"
                 
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          


            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
               Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
              
                  value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phonenumber}
                

                    onChange={(e) => setPhonenumber(e.target.value)}
                  autoComplete="phone-number"
                  className="block w-full  p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          
          </div>
        </div>

            </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" onClick={cancel} className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-dark px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
    </div>
  )
}
