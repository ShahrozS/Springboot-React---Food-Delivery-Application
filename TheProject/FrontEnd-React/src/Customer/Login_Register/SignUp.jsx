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
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const[confirmpassword,setConfirmpassword] = useState('');
  const [message, setMessage] = useState('');
const[flag,setFlag] = useState(0);
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

if(password!=confirmpassword){
setPassword('')
setConfirmpassword('')
setMessage('*Password and Confirm password doest not Match')

}
else{
console.log("passswrod same")
setMessage('')

fetch('http://localhost:8090/auth/create-user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',

        
  },
  body: JSON.stringify(data),
}).then((response) =>{
  if(response.ok){
    console.log('User Created');
    setMessage("User Registered - Go back to login page.")
    setFlag(1);
  }
  else{
    console.error('User Not created');
  }
}).catch((error)=>{
  console.error('Error:',error);
})



}


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
    
    <div className=' backdrop-blur-sm'>
    <div >       <h1 className='h-32  shadow-2xl flex items-center justify-center text-6xl font-bold bg-white mb-4 text-black  '>Register your Account.
    
   
    </h1>
    
    <div className='flex h-screen p-44 pt-10 pl-4  justify-center '>
   
    <div> 
    <Link to="/auth/login">
    <button
    className='rounded-md bg-black mr-4   px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Login Screen</button>
    </Link>
    </div> 
 
   

    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
     

        <div className="border-b border-gray-900/10 pb-12">
   
      
            
            <span
    className={`ml-6 text-lg font-semibold ${flag === 1 ? 'bg-red ' : 'bg-transparent'} text-white p-4 rounded-lg text-center`}

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
                required
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
                   required
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
                 required
                  name="email"
                  type="Text"
                  autoComplete="email"
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  required
                  name="email"
                  type="password"
                  autoComplete="password"
                  value={password}
                  
                  onChange={(e) => setPassword(e.target.value)}
                  
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
              required
                  name="email"
                  type="Password"
                  value={confirmpassword}
                  
                  onChange={(e) => setConfirmpassword(e.target.value)}
                
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
                   required
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
                   required
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
    </div></div>
  )
}
