package com.shahroz.FoodDeliverySBandReact.Controller;


import com.shahroz.FoodDeliverySBandReact.Services.OrdersService;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}



