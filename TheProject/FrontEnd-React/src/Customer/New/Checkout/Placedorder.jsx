import { useEffect, useState } from "react";
import NavbarUser from "../navbar/NavbarUser";
import { orderid, token } from "../../../config";

export const PlacedOrder = () => {

  console.log("In placed order: ")
const [delivery,setDelivery] = useState('');
const[name , setName] = useState('');
const[vehicle,setVehicle] = useState('');
const[amount,setAmount] = useState('');
const [vehicleNumber,setVehicleNumber] = useState('');
const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:8090/DeliveryBoys/deliverybyorder/${orderid}`,{
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
          console.log("Failed to get Delvery");
        }
      }).then((data)=>{
        if(data,length==0){
          setUpdateFlag(true);
        }
          console.log("order: " ,data);
              setDelivery(data);
              setName(data.deliveryGuy.name);
              setVehicle(data.deliveryGuy.vehicle);
              setAmount(data.orderid.payment.amount);
              setVehicleNumber(data.deliveryGuy.vehicleNumber);
            
             
            })
      .catch((error)=>{
        console.log(error);
      })



  },[updateFlag])  
  
  
  






return(
    <>
    <NavbarUser/>

<div className=" backdrop-blur-sm flex flex-col items-center justify-center h-screen">
  

        <div className="orderplaced flex items-center justify-center  text-5xl font-bold mt-25  bg-white ">
    <h1 className="text-black">Your Order Has been Placed.</h1>
        </div>

        <div className="mt-7 p-10 orderplacedcard2 bg-dark">

        {
  delivery ? (
   <div>
      <p className="text-white font-semibold text-center text-3xl">{name} is on his way to deliver your order on {vehicle} {vehicleNumber}</p>
      <p className="text-white font-semibold text-left text-2xl pt-10">Order will be delivered at <span className=" text-red">{delivery.end_time}</span></p>
      <p className="text-white font-semibold text-text-2xl pt-5">{name} will collect Rs. {amount}</p>
      </div>
  ) : (
    <div>

      <p className="text-white text-center text-5xl font-semibold">We are currently assigning a Delivery Driver</p>
    </div>
  )
}
</div>
    </div>

 

    </>
 )

}
export default PlacedOrder;