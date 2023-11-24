import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
const token = localStorage.getItem('jwtToken');
import { useNavigate } from 'react-router-dom';


// const orderid = localStorage.getItem('orderid');

// console.log("Order id in cart " + orderid );

function calculateTotal(products) {


    return products.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
  }
export default function  Cart({orderid,closeCallback}) {


  console.log(orderid + " in cart");
  const navigateTo = useNavigate();

    const [total,setTotal] = useState(0);
const [open, setOpen] = useState(true);

const [products,setProducts] = useState([]);

console.log("Order id in cart " + orderid);

useEffect(()=>{ 
fetch(`http://localhost:8090/cart/getFoodItem/${orderid}` , {
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

      console.log("Opened the cart  "  +formattedProducts);
      setProducts(formattedProducts);
}).catch((error)=>{
    console.log("Error : " , error);
})


},[]);


useEffect(()=>{
  fetch(`http://localhost:8090/cart/getFoodItem/${orderid}` , {
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
  console.log("Fooditems in : " + orderid + " : "  +data)
})
},[]);





/// calculating sum
useEffect(() => {
    // Your existing code to fetch and format products
    // ...

    // Update the total when products change
    const calculatedTotal = calculateTotal(products);
    setTotal(calculatedTotal);
  }, [products]);


  const Checkout=()=>{
   
    navigateTo("/user/home/checkout");

  
    // fetch(`http://localhost:8090/payment/${orderid}/update-subtotal`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization':`Bearer ${token}`,
    //     },
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         // Handle success
    //         console.log('Subtotal updated successfully');
    //       } else {
    //         // Handle errors
    //         console.error('Failed to update subtotal');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });




  }

const deleteitem =(sid,price) =>{

console.log("Deletnig......")

    fetch(`http://localhost:8090/cart/getFoodItem/delete/${sid}`,
    {
method:"DELETE",
headers: {
    'Content-Type': 'application/json', // Set the Content-Type header to indicate JSON data
    'Authorization': `Bearer ${token}`,
},

    }).then((response)=>{

        if(response.ok)
        {
            setTotal(total-price)
            const newProducts = products.filter(product => product.id !== sid);

// Set the state with the updated array
            setProducts(newProducts);
            console.log("Item is deleted");
        }
        else{
            console.log("Unable to delete")
        }
   
    }
    ).catch((error)=>{
        console.log("Error : " , error);
    })


}



console.log("HII");
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 transition " onClose={closeCallback}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden " >
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md transition">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={closeCallback}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                               

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <p>{product.name}</p>
                                      </h3>
                                      <p className="ml-4">Rs. {product.price}</p>
                                    </div>
                                
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => deleteitem(product.id,product.price)}

                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>Rs. {
                         total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          onClick={()=>Checkout()}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={closeCallback}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
