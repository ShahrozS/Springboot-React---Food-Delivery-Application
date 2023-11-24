package com.shahroz.FoodDeliverySBandReact.Controller;


import com.shahroz.FoodDeliverySBandReact.Services.OrdersService;
import com.shahroz.FoodDeliverySBandReact.Services.UserService;
import com.shahroz.FoodDeliverySBandReact.entities.User;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("admin/home")
public class AdminController {

    @Autowired
    OrdersService ordersService;



    @GetMapping("/AllOrders")
    public List<orders> getAllOrder(){

        System.out.println("Getting all orders");
        return ordersService.getAllOrders();
    }


    @Autowired
    UserService userService;
    @GetMapping("/AllUsers")
    public List<User> getAllUser(){
        System.out.println("Getting all users");
        return userService.getUsers();
    }

    @DeleteMapping("/deleteUser/{userid}")
    public Optional<User> deleteUser(@PathVariable String userid){
        Long user_id = Long.valueOf(userid);
        System.out.println("user deleted!");
        return userService.deleteUser(user_id);

    }
}



