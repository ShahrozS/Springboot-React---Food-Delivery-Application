
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import NavbarAdmin from '../NavbarAdmin';
import { useState } from 'react';
import { token } from '../../config';


export default function DeliveryGuyForm({category}) {
 


  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState(''); // Initialize with the desired default value
  const [Phone,setPhone] = useState('');
  const [message,setMessage] = useState('');
  const [vehicleNumber,setVehicleNumber] = useState('');

  const handleSubmit = e =>{
e.preventDefault();
    const data = {
      name : name,
      vehicle : vehicle,
      status : "Available",
      Phonenumber : Phone,
      vehicleNumber:vehicleNumber,
    };

console.log(data)
    fetch(`http://localhost:8090/DeliveryBoys/addDeliveryGuy` ,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        
          'Authorization' : `Bearer ${token}`
        
      },
      body: JSON.stringify(data),
    }).then((response) =>{
      if(response.ok){
        setMessage('Delivery Boy Item Added!')
        console.log('Added Delivery Boy successfully');
      }
      else{
        console.error('Failed to add Delivery Boy');
      }
    }).catch((error)=>{
      console.error('Error:',error);
    })



    setName('');
    setVehicle('');
    setPhone('');
    setVehicleNumber('');
    
  

  }
 
 
 
  return (

<div>

            <NavbarAdmin/>
        <div className=' flex flex-col backdrop-blur-sm '>

        <h1>New Delivery Boy Form</h1>

        <form className='flex flex-col justify-center align-middle m-auto mt-12' onSubmit={handleSubmit}>
          
        <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='FormTextFeild'
          />
          <label>Phone Number</label>
          <input
            type='text'
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            
            className='FormTextFeild'
          />
          <label>Vehicle</label>
          <input
            type='text'
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className='FormTextFeild'
          />
         <label>Vehicle Number</label>
          <input
            type='text'
            placeholder='XXX-000'
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className='FormTextFeild'
          />

        <button type='submit ' className='text-white bg-lightdark p-3 text-md font-semibold mb-4 rounded-lg' >Add Item</button>
        <p className='text-red text-xl font-semibold text-center' >{message}</p>
        </form>






        </div>




    </div>
  )
}
