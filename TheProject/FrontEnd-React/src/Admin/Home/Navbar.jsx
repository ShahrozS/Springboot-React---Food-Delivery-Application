
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className=" bg-dark flex items-center p-4  justify-end">
     
            


                {/* Login Register Button */}
                <div className="ml-4 flow-root lg:ml-6">
                  

              
             <Link to="/auth/Login">
                <button href="SignUp.js" className=" bg-red text-white font-semibold px-2 text-2xl py-1 rounded-lg ml-2">Log out</button>
                </Link>
                </div>

                
              </div>
       
  )
                  }
