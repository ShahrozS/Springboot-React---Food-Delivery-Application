 import React from 'react'

 const Categories = () =>{ 
   function createCategory(){
        fetch("api/categories/create",{
            headers :{
                "content-Type":"application/json",
            },
            method: "POST",
        }).then(reponse =>{
            if(Response.status === 200) return reposnse.json();
    
        }).then(data=>{
            console.log(data);
        }); 
    }
    
    
        return(
  
        <div>
            <div>
             <h1>IIHHHIHI</h1>
            <button onClick={()=> createCategory()}>  Add Category</button>
            </div>
        </div>
    );
   
        }
export default Categories;

