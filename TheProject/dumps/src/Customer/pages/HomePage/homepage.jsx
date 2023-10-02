import React from 'react'
import './homepage.css';
import Navigation from '../../components/navigation/navigation';
const HomePage = () => {
return (
 

<div>
<div> <Navigation></Navigation></div>
 
    <div className="flex items-center justify-center h-screen">
     
    <div className="bg-white p-2 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search..."
        className="w-82 h-8 px-2 outline-none rounded-lg"
    
      />
      <button
 
        className="bg-blue-500 text-white px-2 py-1 rounded-lg ml-2"
      >
        Search
      </button>
    </div>
  </div></div>
)   
}


export default HomePage