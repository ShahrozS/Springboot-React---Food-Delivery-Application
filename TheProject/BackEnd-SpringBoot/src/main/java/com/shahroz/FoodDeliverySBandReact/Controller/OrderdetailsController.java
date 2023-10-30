package com.shahroz.FoodDeliverySBandReact.Controller;


import com.shahroz.FoodDeliverySBandReact.Services.FooditemService;
import com.shahroz.FoodDeliverySBandReact.Services.Order_DetailService;
import com.shahroz.FoodDeliverySBandReact.Services.OrdersService;
import com.shahroz.FoodDeliverySBandReact.entities.order_details;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("cart")
public class OrderdetailsController {

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
       order_details.setOrderId(ordersService.findById(Long.parseLong(String.valueOf(orderid))));
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

    @GetMapping("/getFoodItem/{orderid}")
    public List<order_details> getFoodItems(@PathVariable String orderid){
        System.out.println("Wokring in brniging ordered items to cart");

        Long order_id = Long.valueOf(orderid);
        System.out.println(order_id);

        return orderDetailService.findByOrderId(ordersService.findById(order_id));



    }


    @DeleteMapping("/getFoodItem/delete/{id}")
    public ResponseEntity<?> deleteFoodItem(@PathVariable String id){
        Long slip = Long.valueOf(id);
        System.out.println("Deleting a slip");

        try {

            orderDetailService.deleteById(slip);
            return ResponseEntity.ok("Slip with ID " + slip + " deleted successfully");
        } catch (NumberFormatException e) {
            System.out.println(e + id);
            return ResponseEntity.badRequest().body("Invalid ID: " + id);
        }
    }

}
