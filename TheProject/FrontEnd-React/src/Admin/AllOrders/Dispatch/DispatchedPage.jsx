import { useEffect, useState } from "react";
import { deliveryid, token } from "../../../config";
import NavbarAdmin from "../../NavbarAdmin";

    

export const DispatchedPage = () => {

    const [delivery,setDelivery] = useState('');

    const[name,setName] = useState('');
    const[id,setId] = useState('');
    const[vehicle,setVehicle] = useState('');


    console.log( deliveryid  )
useEffect(() => {
  console.log("In use effect");
  const updatedDeliveryId = localStorage.getItem('deliveryid');
    // Fetch categories from the Spring Boot backend
    fetch(`http://localhost:8090/DeliveryBoys/delivery/${updatedDeliveryId}` , {
      method: 'GET',
    headers:{
      'Authorization' : `Bearer ${token}`
    }   
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Assuming the response is JSON data
        } else {
          throw new Error('Failed to fetch deliveres.');
        }
      })
      .then((data) => {
   console.log("Delivery data "  , data)
        setDelivery(data);
        setId(data.orderid.order_id);
        setName(data.deliveryGuy.name);
        setVehicle(data.deliveryGuy.vehicle);

        
        // Update the state with fetched categories
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


console.log(delivery)

    return(

        <div>

        <NavbarAdmin/>
            <div className=" backdrop-blur-sm flex flex-col mt-10 mb-10 items-center h-450vh">




    
        <div className="orderplacedcard3 flex flex-col items-center justify-center   text-5xl font-bold   bg-white ">
    <h1 className="text-dark">Order No. {id} dispatched Successfully.</h1>
    <h3 className="text-3xl mt-10">Order Dispatched via {name} on {vehicle}.</h3>
    <h3 className="text-3xl mt-4">Order Dispatched at {delivery.start_time}</h3>
    <h3 className="text-3xl mt-4">Order will Reach its destination at {delivery.end_time}</h3>
    </div>
    </div>



        </div>



    )



}


