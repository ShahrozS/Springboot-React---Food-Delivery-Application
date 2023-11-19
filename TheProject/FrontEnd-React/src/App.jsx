//import logo from './logo.svg';
import './App.css';
//import Navigation from './Customer/components/navigation/navigation';
import HomePage from './Customer/pages/HomePage/homepage';
import SignUp from './Customer/Login_Register/SignUp';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Categories from './Admin/Categories/Categories';
import Mainpage from './Admin/FoodItems/categorycard/Mainpage';
import Fooditems  from './Admin/FoodItems/foodItems/FoodWrapper';
import FoodItemForm from './Admin/FoodItems/newItemForm/NewItemForm';
import AdminHome from './Admin/Home/Home';
import Login from './Customer/Login_Register/Login/LoginPage';
import { useEffect, useState } from 'react';
import { token } from './config';
import MainpageUser from './Customer/New/FoodItems/categorycard/MainpageUser';
import FooditemsUser from './Customer/New/FoodItems/foodItems/FoodWrapperUser';
import UserHome from './Customer/New/Home/HomeUser';
import Checkout from './Customer/New/Checkout/Checkout';
import Orders from './Admin/AllOrders/Order';
import PlacedOrder from './Customer/New/Checkout/Placedorder';
import Dispatch from './Admin/AllOrders/Dispatch/Dispatch';
import DeliveryGuyForm from './Admin/DeliveryGuys/DeliveryGuysForm';
import DeliveryBoysAll from './Admin/DeliveryGuys/DeliveryguysAll';
import Deliveryguys from './Admin/DeliveryGuys/Deliveryguys';
import { DispatchedPage } from './Admin/AllOrders/Dispatch/DispatchedPage';




//aosdjaasdas




function App() {

  const[categories , setCards] = useState([
    
  ]);
  const[orders,setOrders] =useState([

  ]);
  
  useEffect(() => {
    // Fetch categories from the Spring Boot backend
    fetch('http://localhost:8090/admin/home/Categories' , {
      method: 'GET',
    headers:{
      'Authorization' : `Bearer ${token}`
    }   
    })
      .then((response) => {
        if (response.ok) {
          console.log("Token : " +token)
          console.log(response)
          return response.json(); // Assuming the response is JSON data
        } else {
          throw new Error('Failed to fetch categories.');
        }
      })
      .then((data) => {
   
        setCards(data); // Update the state with fetched categories
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  

  useEffect(() => {
    // Fetch categories from the Spring Boot backend
    fetch('http://localhost:8090/admin/home/AllOrders' , {
      method: 'GET',
    headers:{
      'Authorization' : `Bearer ${token}`
    }   
    })
      .then((response) => {
        if (response.ok) {
        
          return response.json(); // Assuming the response is JSON data
        } else {
          throw new Error('Failed to fetch Orders.');
        }
      })
      .then((data) => {
        console.log("orders" +data)
        setOrders(data); // Update the state with fetched categories
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  


  return (

  <div className=''> 
    <Router>


     <Routes>
        //Admin Routes 
        <Route path="/" element={<Login/>} />
        <Route path="/auth/signup" element={<SignUp/>} />
        <Route path="/admin/home/categories"element ={<Categories/>}/>
        <Route path="/admin/home/FoodItems" element={<Mainpage/>}/>
        <Route path="/admin/home"element={<AdminHome/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/admin/home/AllOrders" element={<Orders/>}/>
      

        //dispatching orders
        {orders.map((order) => (
          <Route
            key={order.order_id}
            path={`/admin/home/dispatch/${order.order_id}`}
            element={<Dispatch orderid = {order.order_id}/>}
          />
        ))}
        <Route path="/admin/dispatch" element={<DispatchedPage/>}/>

        //Delivery Guy
          <Route path="/admin/DeliveryGuy/addNewDeliveryGuy" element={<DeliveryGuyForm/>}/>
          <Route path="/admin/DeliveryGuy" element={<Deliveryguys/>}/>

        // Food Item According categories routse:
        
        {categories.map((category) => (
          <Route
            key={category.name}
            path={`/admin/home/FoodItems/${category.name}/ShowAll`}
            element={<Fooditems category={category.name} />}
          />
        ))}
           {categories.map((category) => (
          <Route
            key={category.name}
            path={`/admin/home/FoodItems/${category.name}/ShowAll/addItem`}
            element={<FoodItemForm category={category.name} />}
          />  
        ))}



//Users route
      
        <Route path='/user/home/FoodItems' element={<MainpageUser/>}/>
        <Route path={`/user/home`} element={<UserHome />}/>
  
        {categories.map((category) => (
          <Route
            key={category.name}
            path={`/user/home/FoodItems/${category.name}/ShowAll/:orderid`}
            element={<FooditemsUser category={category.name} />}
          />
        ))}
         

          <Route path="/user/home/checkout" element={<Checkout/>}/>
          <Route path="/user/home/checkout/placedorder" element={<PlacedOrder/>}/>
        </Routes> 
    </Router>







</div>
   
  );
}

export default App;
