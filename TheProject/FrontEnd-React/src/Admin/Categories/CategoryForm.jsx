import React , {useState} from 'react'

export const CategoryForm = () => {
 
  const [value,setValue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    // Yaha se spring ko bhejna hai
    
  }

  return (
    <form className='categoryForm' onSubmit={handleSubmit}>
      <input
       type='text' className='category-input text-black font-semibold border-3' placeholder='Enter a new Category' onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='category-btn bg-lightdark rounded-lg ml-2' >Enter

      </button>
    </form>
  )
}
