package com.shahroz.FoodDeliverySBandReact.Controller;

import com.shahroz.FoodDeliverySBandReact.Services.FooditemService;
import com.shahroz.FoodDeliverySBandReact.Services.UserService;
import com.shahroz.FoodDeliverySBandReact.entities.User;
import com.shahroz.FoodDeliverySBandReact.entities.fooditem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private FooditemService fooditemService;

    @GetMapping("/users")
    public List<User> getUser(){
        return userService.getUsers();
    }

    @PostMapping("/current-user")
    public String getLoggedInUser(Principal principal){
        return principal.getName();
    }

    @GetMapping("/users/{email}")
    public User getUserByEmail(@PathVariable String email ){
        System.out.println("CHECKING YES " + email);
        return userService.findByEmail(email);
    }
    @GetMapping("/home/{category_name}/ShowAll")
    public List<fooditem> getAllFoodItems(){
        return fooditemService.FindAllFood();
    }



}
