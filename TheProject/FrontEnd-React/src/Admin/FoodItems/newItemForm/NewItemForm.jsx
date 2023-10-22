
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import NavbarAdmin from '../../Navbar'


export default function FoodItemForm({category}) {
 
  const handleSubmit = e =>{
    e.preventDefault();
    // Yaha se spring ko bhejna hai
    
  }
 
 
 
  return (
    <div>

            <NavbarAdmin/>
        <div className=' flex flex-col backdrop-blur-sm '>

        <form className='flex flex-col justify-center align-middle m-auto mt-12' onSubmit={handleSubmit}>
          
        <label>Name </label>  <input className='FormTextFeild'/>
        <label>Price</label><input type="number" step="0.01"className='FormTextFeild'/>
       <label>Description</label> <input type='Text' className='FormTextFeild'/>
       <label>Ingredients</label> <input type='Text' className='FormTextFeild'/>
       <label>Category</label> <input className='FormTextFeild' type='Text'/>

        <button type='submit ' className='text-white bg-lightdark p-3 text-md font-semibold mb-4 rounded-lg' >Add Item</button>

        </form>






        </div>




    </div>
  )
}
