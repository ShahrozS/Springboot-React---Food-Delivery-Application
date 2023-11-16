import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { token } from '../../../config';

    

export const DispatchingDeliveryBoyItem = ({orderid,DeliveryGuy}) => {
  console.log(DeliveryGuy.name + "asdds");
  console.log("Order id - " +  orderid)
    const[order,setOrder] = useState('');

const[deliveryguy,setDeliveryGuy] = useState('');




    const HandleButton = (e) => {
      e.preventDefault()
        // fetching items in card
fetch(`http://localhost:8090/order/${orderid}` , {
  method:"GET",
      headers:{
          'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
          'Authorization': `Bearer ${token}`,
      },
  }).then((response)=>{
      if(response.ok){
          return response.json();
         
  
      }
      else{
          console.log("Failed to catch item");
      }
  }).then((data)=>{
  
  setOrder(data);
  
        })
  .catch((error)=>{
      console.log("Errors : " , error);
  })

console.log("order : " ,order)

      const currTime = new Date();
currTime.setMinutes(currTime.getMinutes() + 50);

const EndTime = currTime;
     
const start = new Date();
setDeliveryGuy(DeliveryGuy);

      const data ={

        end_time: EndTime,
        start_time:start,
        order_id:order,
        deliveryGuy:deliveryguy


      }

      console.log("delivery gyy:  " ,deliveryguy)
      console.log("data :" ,data)


      fetch(`http://localhost:8090/DeliveryBoys/delivery` ,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          
            'Authorization' : `Bearer ${token}`
          
        },
        body: JSON.stringify(data),
      }).then((response) =>{
        if(response.ok){
          return response.json();
       
        }
        else{
          console.error('Failed to make Delivery');
        }
      }).then((data) => {
        console.log(data); 
        localStorage.setItem('deliveryid',data.delivery_id);


        // Log the response data
      }).catch((error)=>{
        console.error('Error:',error);
      })
  
    };


    return (
        <div className='category'>
        
            <p className='text-2xl'>{DeliveryGuy.name} </p>
            <div>
              <div><p >{DeliveryGuy.status}</p></div>
              <button 
              style={{ opacity: DeliveryGuy.status !== 'Available' ? 0.5 : 1 }}
              disabled={DeliveryGuy.status !== 'Available'}
              onClick={HandleButton}
              className='text-white bg-lightdark p-3 text-sm font-semibold mb-1 rounded-lg '>Assign </button>
            </div>
        </div>
    )
}
