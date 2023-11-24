import React , {useState} from 'react'
const token = localStorage.getItem("jwtToken");
export const CategoryForm = () => {
 
  const [value,setValue] = useState("");

  const handleSubmit = e =>{

   
    
    const data = {
      name: value,
    };

    fetch('http://localhost:8090/admin/home/Categories/create' , {
      method: 'POST',
      headers: {   
'Content-Type': 'application/json',

  'Authorization' : `Bearer ${token }` 

      },
      body: JSON.stringify(data),
    })
    .then((response)=>{
      if(response.ok){
        console.log(response.body)
        console.log('Category added succesfully');
      }else{
        console.error('Failed to add Category.');
      }
    })
    .catch((error) =>{
      console.error('Error:' , error);
    });
  };

  return (
    <form className='categoryForm' onSubmit={handleSubmit}>
      <input
       type='text' className='category-input text-black  placeholder-black font-semibold border-3' placeholder='Enter a new Category' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='category-btn bg-lightdark rounded-lg ml-2' >Enter

      </button>
    </form>
  )
}
