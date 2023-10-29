import { useState } from "react";
import { Link } from "react-router-dom";
import GetUser, { getUserByUsername } from "../../../Admin/Util/GettingAUser";
import { token } from "../../../config";

export default function Login() {
   
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [userType, setUserType] = useState(1);
  const [message, setMessage] = useState('');
  const handleUserTypeChange = (value) => {
    setUserType(value);
  };



  const handleSubmit = e =>{

e.preventDefault();


const details = {
  email: Email,
  password: Password
}

console.log(details.email + details.password)
fetch('http://localhost:8090/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(details),
})
  .then((response) => {
    if (response.ok) {
      setMessage('')
      return response.json(); // Return the Promise from response.json()
    } else {
      setMessage(JSON.stringify(response))
      throw new Error('Network response was not ok');
    }
  })
  .then((data) => { 
    console.log("data = " + JSON.stringify(data));
    
      // agar yaha me aik aur fetch chalaun, pass the username there, in the url, hmm
      // function in spring, which will take the username, generate uski id, make a new order row, add username usme. which will be empty.

      const userdetails = {
          //username
      } 
  //       fetch('http://localhost:8090/home/user/${data.username}/createordercol' , {
  //         method:'POST',
  //         headers:{
  //           'Content-Type': 'application/json',
  // },
  //       })
  //       body: JSON.stringify()



    
    // Log the JSON data
    // Store the token and username in localStorage
    
   
    fetch(`http://localhost:8090/user/home/GenerateOrder` , {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,

      },
      
      

    }).then((response)=>{
      console.log("in the second fetch");

      if(response.ok){
        console.log("Order id generated")
      }
      else{
        console.log("Failure in generating order id")
      }
    }).catch((error)=>{
      console.log(`Errir :` ,error);
    })

    console.log("aftr second fetch");
    
    localStorage.setItem('jwtToken', data.jwtToken);
    localStorage.setItem('username', data.username);

console.log("console log" + data.username)

getUserByUsername(data.username)
          .then((user) => {
            console.log('User data:', user);
            // Now you have the user data and can use it as needed.
          })
          .catch((error) => {
            console.error('Error fetching user:', error);
          });



  })
  .catch((error) => {
    setMessage(' ' + error)
    console.error('Error:', error);
  });

   }
  
  
  return (
 
   
   
   <>
      
      <div className=" backdrop-blur-sm h-screen  ">

        <div className="flex min-h-full flex-1 flex-col  justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>

            <p className="text-lg font-semibold text-red text-center">
  {message} {/* Display the message as text */}
</p>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="Text"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-dark  hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div>
      <div className="flex items-center justify-center mt-4">
        <label className="flex p-4">
          <input
            type="radio"
            name="userType"
            value={1}
        checked={userType === 1}
            onChange={() => handleUserTypeChange(1)}
          />
         Customer
        </label>

        <label>
    
          <input 
            type="radio"
            name="userType"
            value={0}
            required
       checked={userType === 0}
            onChange={() => handleUserTypeChange(0)}
          />
    Admin 
        </label>
      </div>

    </div>

              </div>
  
              <div>
                <button
                  type="submit"
                  
                  className="flex mb-2 w-full justify-center rounded-md bg-lightdark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
               
               <Link to="/auth/signup"> 
                <button
                  type="submit"
                  
                  className="flex w-full justify-center rounded-md bg-lightdark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button></Link>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
            
            </p>
          </div>
        </div>
        </div>
      </>
    )
  }
  