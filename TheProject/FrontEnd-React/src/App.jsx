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



//aosdjaasdas

const categories = [
  { name: 'Contiental' },
  { name: 'Chinese Rice' },
  // Add more categories here
];


function App() {
  return (

  <div className=''> 
    <Router>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/admin/home/categories"element ={<Categories/>}/>
        <Route path="/admin/home/FoodItems" element={<Mainpage/>}/>
        <Route path="/admin/home"element={<AdminHome/>}/>
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
        
        </Routes>
    </Router>


</div>
   
  );
}

export default App;
