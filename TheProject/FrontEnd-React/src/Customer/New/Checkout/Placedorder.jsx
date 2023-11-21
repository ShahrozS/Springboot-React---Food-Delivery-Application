import { useEffect, useState } from "react";
import NavbarUser from "../navbar/NavbarUser";
import {  token } from "../../../config";
import NavbarUserWithoutCart from "../navbar/NavBarWithoutCart";

export const PlacedOrder = () => {
  console.log("In placed order: ");
  const [delivery, setDelivery] = useState('');
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [amount, setAmount] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [updateFlag, setUpdateFlag] = useState(false);


  const orderid = localStorage.getItem('orderid');
  console.log("Order id in place holder: ", orderid); 
  useEffect(() => {
    let data1 = {};
console.log("Fetching with order id : "  + orderid)
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8090/DeliveryBoys/deliverybyorder/${orderid}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          data1 = data;

          if (data.length === 0) {
            setUpdateFlag(true);
          }

          console.log("order: ", data);
          setDelivery(data);
          setName(data.deliveryGuy.name);
          setVehicle(data.deliveryGuy.vehicle);
          setAmount(data.orderid.payment.amount);
          setVehicleNumber(data.deliveryGuy.vehicleNumber);
        } else {
          console.log("Failed to get Delivery");
        }
      } catch (error) {
        console.log(error);
      }
    };

  
    fetchData();


    const timerId = setInterval(() => {
      if (!updateFlag) {
        fetchData();
      }
    }, 5000);

    return () => clearInterval(timerId);

  }, [updateFlag]); 

  return (
    <>
      <NavbarUserWithoutCart />
      <div className=" backdrop-blur-sm flex flex-col items-center justify-center h-screen">
        <div className="orderplaced flex items-center justify-center  text-5xl font-bold mt-25  bg-white ">
          <h1 className="text-black">Your Order Has been Placed.</h1>
        </div>

        <div className="mt-7 p-10 orderplacedcard2 bg-dark">
          {delivery ? (
            <div>
              <p className="text-white font-semibold text-center text-3xl">{name} is on his way to deliver your order on {vehicle} {vehicleNumber}</p>
              <p className="text-white font-semibold text-left text-2xl pt-10">Order will be delivered at <span className=" text-red">{delivery.end_time}</span></p>
              <p className="text-white font-semibold text-text-2xl pt-5">{name} will collect Rs. {amount}</p>
            </div>
          ) : (
            <div>
              <p className="text-white text-center text-5xl font-semibold">We are currently assigning a Delivery Driver</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PlacedOrder;
