import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

    
const token = localStorage.getItem('jwtToken');
const deliveryid = localStorage.getItem('deliveryid');

export const DispatchingDeliveryBoyItem = ({orderid,DeliveryGuy}) => {
  console.log(DeliveryGuy.name + "asdds");
  console.log("Order id - " +  orderid)
    const[order,setOrder] = useState('');
    const navigateTo = useNavigate();
const[deliveryguy,setDeliveryGuy] = useState(DeliveryGuy);


//Getting order
useEffect(() => {
  const fetchData = async () => {
    try {
      const orderResponse = await fetch(`http://localhost:8090/order/${orderid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    
      if (orderResponse.ok) {console.log("Worked 1")
        const orderData = await orderResponse.json();
        setOrder(orderData);
        console.log('Order is here', orderData);
        console.log('order is saved' , order);
      } else {
        console.log('Failed to fetch  order');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
  fetchData();
}, []);







const HandleButton = async (e) => {
  e.preventDefault();

  try {

 
    console.log("Updating delivery guy sattus" + DeliveryGuy['delivery_Guy_id']);
    const updateDeliveryGuyStatus = await fetch(`http://localhost:8090/DeliveryBoys/update?deliveryguyid=${DeliveryGuy['delivery_Guy_id']}&status=Unavailable`  , {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      // body: JSON.stringify({
      //   deliveryguyid: '3',//deliveryguy['delivery_guy_id'],
      //   status: 'Unavailable',
      // }), 
    });
    
    if(updateDeliveryGuyStatus.ok){
      console.log("Delivery guy status updated successfully");
    }
    else{
      console.log("Status didnt update ;-; ");
    }

    const currTime = new Date();
    currTime.setMinutes(currTime.getMinutes() + 50);

    const EndTime = currTime;

    const start = new Date();

console.log("Order after button " , order);
    const data = {
      end_time: EndTime,
      start_time: start,
      orderid: order,
      deliveryGuy: deliveryguy,
    };

    console.log('delivery guy: ', deliveryguy);
    console.log('data:', data);

    // Make a POST request
    const deliveryResponse = await fetch('http://localhost:8090/DeliveryBoys/delivery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (deliveryResponse.ok) {
      console.log("Worked 2")
      const deliveryData = await deliveryResponse.json();
      console.log('Clicked assign', deliveryData);
      console.log("Going into local storage-> " ,  deliveryData.delivery_id);
      localStorage.setItem('deliveryid', deliveryData.delivery_id);
      const updatedDeliveryId = localStorage.getItem('deliveryid');
console.log("Local storage:  " +  updatedDeliveryId);









    navigateTo('/admin/dispatch')
    } else {
      console.error('Failed to make Delivery');
    }

     //to check the error in fetch in detail
 if (deliveryResponse.ok) {
  console.log('Order has been updated successfully');
} else {
  console.error('Failed to update order. Response:', deliveryResponse);

  try {
    const errorData = await deliveryResponse.json();
    console.error('Error details:', errorData);
  } catch (error) {
    console.error('Error parsing error details:', error);
  }







}










    // Update order status
console.log(orderid  + "Is going to get updated")
  const updateOrder =   await fetch(`http://localhost:8090/order/updateStatus/${orderid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

 if(updateOrder.ok){
  console.log("Worked 3")
 }else{
  console.log("Couldnt update order");
 }


 
  } catch (error) {
    console.error('Error:', error);
  }
};


    return (
        <div className='category'>
        
            <p className='text-2xl'>{DeliveryGuy.name} </p>
            <div>
              <div><p >{DeliveryGuy.status}</p></div>
              <button 
              style={{ opacity: DeliveryGuy.status !== 'Available' ? 0.5 : 1 }}
              disabled={DeliveryGuy.status !== 'Available' }
              onClick={HandleButton}
              className='text-white bg-lightdark p-3 text-sm font-semibold mb-1 rounded-lg '>Assign </button>
            </div>
        </div>
    )
}
