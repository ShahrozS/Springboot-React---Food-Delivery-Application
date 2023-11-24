import { useEffect } from "react";
import NavbarAdmin from "../../NavbarAdmin";
import DispatchingDeliveryBoysAll from "./DispatchingDeliveryboys";

export const Dispatch = ({orderid}) => {















return(

<div className=" backdrop-blur-sm">

<NavbarAdmin/>

<div className="   flex flex-col mt-10 mb-10 items-center h-450vh">
  

        <div className="orderplaced flex items-center justify-center   text-5xl font-bold   bg-white ">
    <h1 className="text-black">Dispatching Order Number {orderid}!
    <h3 className="text-2xl mt-4">Assign a Delivery Driver.</h3></h1>
    </div>
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