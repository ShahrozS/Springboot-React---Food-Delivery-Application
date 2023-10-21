
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
     
            


                {/* Login Register Button */}
                <div className="flex lg:ml-6">
                  

              <button  className="bg-green-950 text-white px-2 py-1 rounded-lg ml-2">Log in</button>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
             
             <Link to="/signup">
                <button href="SignUp.js" className="border border-green-950 text-green-950 px-2 py-1 rounded-lg ml-2">Signup</button>
                </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
       
  )
                  }
