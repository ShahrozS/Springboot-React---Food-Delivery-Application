package com.shahroz.FoodDeliverySBandReact.Controller;

import com.shahroz.FoodDeliverySBandReact.Services.CategoryService;
import com.shahroz.FoodDeliverySBandReact.Services.FooditemService;
import com.shahroz.FoodDeliverySBandReact.Services.OrdersService;
import com.shahroz.FoodDeliverySBandReact.Services.UserService;
import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.User;
import com.shahroz.FoodDeliverySBandReact.entities.fooditem;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private FooditemService fooditemService;

    @Autowired
    private OrdersService ordersService;

    @GetMapping("/users")
    public List<User> getUser(){
        return userService.getUsers();
    }

    @PostMapping("/current-user")
    public String getLoggedInUser(Principal principal){
        return principal.getName();
    }

    // this will find the user by his username
    @GetMapping("/users/{email}")
    public User getUserByEmail(@PathVariable String email ){
        System.out.println("CHECKING YES " + email);
        return userService.findByEmail(email);
    }
    //Getting all the food items a cateogyr holds
    @GetMapping("/home/FoodItems/{category_name}/ShowAll")
    public List<fooditem> getAllFoodItems( Principal principal){


            System.out.println("PRINCIPLE CALLED " + principal.getName());
        System.out.println("Getting food items");
        return fooditemService.FindAllFood();
    }

    @PostMapping("/home/FoodItems/AddItem")


    // Generating all the cateogures
    @GetMapping("/home/Categories")
    public List<Category> getAllCategories(Principal principal){
        return categoryService.getAllCategory();
    }


// Generating an order id as soon as user logs in:
    @PostMapping("/home/GenerateOrder")
    public orders createOrder(Principal principal){

        orders neworder = new orders();
        neworder.setUser(userService.findByEmail(principal.getName()));
        neworder.setStatus("Pending");
        neworder.setDatetime(new Date());
if(neworder == null){
    System.out.println("Error in creating a new order");
}
else {
    System.out.println("Creating order for  " + principal.getName());
}


        return  ordersService.createOrder(neworder);

    }


}
