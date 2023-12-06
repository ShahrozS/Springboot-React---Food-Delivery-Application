import { useEffect } from "react";
import NavbarAdmin from "../../NavbarAdmin";
import DispatchingDeliveryBoysAll from "./DispatchingDeliveryboys";

export const Dispatch = ({orderid}) => {



  const token = localStorage.getItem('jwtToken');

  const Reset = e =>{

    fetch('http://localhost:8090/DeliveryBoys/updateAll' , {
      method: 'GET',
    headers:{
      'Authorization' : `Bearer ${token}`
    }   
    }).then((response)=>{
      if(response.ok){
        console.log("All delivery boys updated!!");
      }
      else{
        console.log("Failed to updated!!!");
      }
    })
    window.location.reload();

  }










return(

<div className=" backdrop-blur-sm">

<NavbarAdmin/>

<div className="   flex flex-col mt-10 mb-10 items-center h-450vh">
  

        <div className="orderplaced flex items-center justify-center   text-5xl font-bold   bg-white ">
    <h1 className="text-black">Dispatching Order Number {orderid}!
    <h3 className="text-2xl mt-4">Assign a Delivery Driver.</h3></h1>
 
    </div>   <button onClick={Reset} className=' flex ml-5 items-center mr-3 mt-3 left-0  w-44 h-12 rounded-lg bg-black justify-center text-white font-semibold text-xl'>
   Reset Status
    </button>
    </div>
<div >
    
</div>

{/* margin-top: 5rem;
  padding: 2rem;
  border-radius: 0px;
  text-align: center;
  align-items: center;
  justify-content: center; */}


<div className=" pr-2.5  border-r-0 text-center align-middle items-center  backdrop-blur-sm">

<DispatchingDeliveryBoysAll orderidd={orderid}/>



</div>



</div>


)

}
export default Dispatch;