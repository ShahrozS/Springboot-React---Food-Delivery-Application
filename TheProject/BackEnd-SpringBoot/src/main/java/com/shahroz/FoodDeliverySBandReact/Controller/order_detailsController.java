package com.shahroz.FoodDeliverySBandReact.Controller;


import com.shahroz.FoodDeliverySBandReact.Services.FooditemService;
import com.shahroz.FoodDeliverySBandReact.Services.Order_DetailService;
import com.shahroz.FoodDeliverySBandReact.Services.OrdersService;
import com.shahroz.FoodDeliverySBandReact.entities.order_details;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@RequestMapping("/cart")
public class order_detailsController {

 @Autowired
    Order_DetailService orderDetailService;
@Autowired
    OrdersService ordersService;
@Autowired
    FooditemService fooditemService;
 //
//    @PostMapping("/addItem")
//    public ResponseEntity<order_details> addItem(@RequestBody order_details order_details ){
//        // Attempt to create the order
//        System.out.println("Adding item to cart");
//        System.out.println("FOod id = " +order_details.getFoodItem());
//        System.out.println("Order id =" +order_details.getOrder_id());
//        order_details createdOrder_detail = orderDetailService.saveOrderDetail(order_details);
//
//        if (createdOrder_detail != null) {
//
//            return ResponseEntity.ok(createdOrder_detail);
//        } else {
//            // Handle the case where order creation failed
//            System.out.println("Error in creating a new order");
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//        }
//    }


    @PostMapping("/addItem")
    public ResponseEntity<order_details> addItem(@RequestBody Map<String, Object> requestBody ){
        // Attempt to create the order
       Integer food_id = (Integer) requestBody.get("food_id");
       Integer quantity = Integer.parseInt((String)requestBody.get("quantity")) ;
       Integer orderid = Integer.parseInt((String) requestBody.get("order_id_order_id"));

       order_details order_details = new order_details();
       order_details.setFoodItem(fooditemService.findByID(Long.parseLong(String.valueOf(food_id))));
       order_details.setOrder_id(ordersService.findById(Long.parseLong(String.valueOf(orderid))));
       order_details.setQuantity(quantity);
        order_details createdOrder = orderDetailService.saveOrderDetail(order_details);

        if (createdOrder != null) {
            // Order was successfully created

            return ResponseEntity.ok(createdOrder);
        } else {
            // Handle the case where order creation failed
            System.out.println("Error in creating a new order");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }



    }

}
