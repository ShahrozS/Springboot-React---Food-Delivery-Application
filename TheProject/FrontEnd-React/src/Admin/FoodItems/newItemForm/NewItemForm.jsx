
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import NavbarAdmin from '../../NavbarAdmin'
import { useState } from 'react';
import { token } from '../../../config';

export default function FoodItemForm({category}) {
 


  const [foodname, setFoodname] = useState('');
  const [price, setPrice] = useState(0); // Initialize with the desired default value
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = e =>{
e.preventDefault();
    const data = {
      food_name : foodname,
      price : price,
      description : description,
      ingredients : ingredients,
    };

console.log(data)
    fetch(`http://localhost:8090/admin/home/FoodItems/${category}/ShowAll/addItem` ,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        
          'Authorization' : `Bearer ${token}`
        
      },
      body: JSON.stringify(data),
    }).then((response) =>{
      if(response.ok){
        setMessage('Food Item Added!')
        console.log('Added food item successfully');
      }
      else{
        console.error('Failed to add Food Item');
      }
    }).catch((error)=>{
      console.error('Error:',error);
    })



    setFoodname('');
    setPrice('');
    setDescription('');
    setIngredients('');
  

  }
 
 
 
  return (

<div>

            <NavbarAdmin/>
        <div className=' flex flex-col backdrop-blur-sm '>

        <form className='flex flex-col justify-center align-middle m-auto mt-12' onSubmit={handleSubmit}>
          
        <label>Name</label>
          <input
            type='text'
            value={foodname}
            onChange={(e) => setFoodname(e.target.value)}
            className='FormTextFeild'
          />
          <label>Price</label>
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step='0.01'
            className='FormTextFeild'
          />
          <label>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='FormTextFeild'
          />
          <label>Ingredients</label>
          <input
            type='text'
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className='FormTextFeild'
          />
          <label>Category</label>
          <input
            type='text'
            value={category}
            className='FormTextFeild'
            disabled // Assuming category should not be editable
          />

        <button type='submit ' className='text-white bg-lightdark p-3 text-md font-semibold mb-4 rounded-lg' >Add Item</button>
        <p className='text-red text-xl font-semibold text-center' >{message}</p>
        </form>






        </div>




    </div>
  )
}
