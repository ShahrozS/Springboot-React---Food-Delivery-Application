import NavbarUser from "../navbar/NavbarUser";

export const PlacedOrder = () => {
return(
    <>
    <NavbarUser/>

<div className=" backdrop-blur-sm flex flex-col items-center justify-center h-screen">
  

        <div className="orderplaced flex items-center justify-center  text-5xl font-bold mt-25  bg-white ">
    <h1 className="text-black">Your Order Has been Placed.</h1>
        </div>




        <div className="mt-7 p-10 orderplacedcard2 bg-primary">

<p>Sshasodhasdio</p>

<p>Sshasodhasdio</p>

<p>Sshasodhasdio</p>
</div>




    </div>

 

    </>
 )

}
export default PlacedOrder;