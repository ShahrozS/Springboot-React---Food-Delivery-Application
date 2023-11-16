import { Fragment, useEffect, useRef, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { orderid } from '../../../config'
import Cart from './Cart'



const navigation = [
  { name: 'Home', Link:`/user/home/${orderid}`, href: '#', current: true },
  { name: 'Order  Food',Link:`/user/home/FoodItems/${orderid}`, href: '#', current: false },
  { name: 'Order History', Link:'/admin/home/FoodItems',href: '#', current: false },
  { name: 'Manage Account',Link:'/admin/home/Users', href: '#', current: false },
  { name: `Order Status `,Link:'/admin/home/Orders', href: '#', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarUser() {
  const closeCart = () => {
    setOpenCart(false);
  };

const [openCart, setOpenCart] = useState(false);


const openCartDialog = () => {
  setOpenCart(true);
};

const closeMyJSX = () => {
  setOpenCart(false);
};

  console.log(orderid);

  return (
    
 
 <Disclosure as="nav" className=" bg-dark">
      {({ open }) => (
        <>
          <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                    <Link to={item.Link}> <a
                        key={item.name}
                        href={item.href}
                      
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      > 
                        {item.name}
                      </a></Link> 
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button" onClick={openCartDialog}
                  className="relative rounded-full bg-white p-1  font-semibold text-3xl text-black hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View cart</span>
                  <ShoppingCartIcon   className="h-6 w-6 k" aria-hidden="true" />
                </button>
                {openCart && <Cart  closeCallback={closeMyJSX}/>}
              
                {/* Profile dropdown */}
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
             
                <Disclosure.Button 
                  key={item.name}
                  as="a"
                  href={item.href}
                 
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>  
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
