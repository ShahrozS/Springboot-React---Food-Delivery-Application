import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
    

const token = localStorage.getItem('token');

export const OrderStatusitem = ({index,Order}) => {
  const [products,setProducts] = useState([]);

 useEffect(()=>{
  fetch(`http://localhost:8090/cart/getFoodItem/${Order.order_id}` , {
    method:"GET",
        headers:{
            'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
            'Authorization': `Bearer ${token}`,
        },
    }).then((response)=>{
        if(response.ok){
            return response.json();
            console.log("Item is here")
    
        }
        else{
            console.log("Failed to catch item");
        }
    }).then((data)=>{
    
        console.log(data)
        const formattedProducts = data.map((item) => {
            let slipid = 0;
            let pquantity = 0;
            let pprice = 0;
            let pname = "";
    
            if(item.hasOwnProperty('slip_id')){
                slipid = item.slip_id;
            }
            if (item.hasOwnProperty('quantity')) {
              pquantity = item.quantity;
            }
    
            if (item.hasOwnProperty('foodItem')) {
              const foodItem = item.foodItem;
              if (foodItem.hasOwnProperty('food_name')) {
                pname = foodItem.food_name;
                pprice = foodItem.price;
                
            
              }
            }
            
         
            return {
              name: pname,
              quantity: pquantity,
              price: pprice,
              id : slipid,
            };
          });
    
          console.log(formattedProducts);
          setProducts(formattedProducts);
    }).catch((error)=>{
        console.log("Error : " , error);
    })
    

 },[]) 

//to do: Make another page of status

  return (
    <div>
    <div className='previousorder'>
    
        <p>Order no. {Order.order_id}</p>
        <div>
            <button  className='w-20 p-1 bg-red rounded-lg text-black hover:bg-white '>Reorder</button>
        </div>
    </div>

    <div className='previousorderdetails'>
    <div className=" justify-center  align-middle items-center mt-1 space-y-3 rounded-lg border-white bg-dark px-2 py-4 sm:px-6">
    <ul role="list" className="-my-6 divide-y divide-gray-200 ">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                               

                                <div className="ml-4 flex flex-1 flex-col  ">
                                  <div>
                                    <div className="flex justify-between font-medium text-2xl text-white">
                                      <h3>
                                        <p className='text-lg'>{product.name} X {product.quantity}</p>
                                      </h3>
                                      <p className="ml-4 text-lg "> Rs. {product.price}</p>
                                    </div>
                                
                                  </div>
                                
                                </div>
                              </li>
                            ))}
                          </ul>



    
    </div>
    <div className=' flex  items-center mr-3  w-44 h-12 rounded-lg bg-black justify-center'>
     <p className='text-white font-semibold text-xl '>{Order.status}</p> 
    </div>
    </div>
    </div>
  )
}
