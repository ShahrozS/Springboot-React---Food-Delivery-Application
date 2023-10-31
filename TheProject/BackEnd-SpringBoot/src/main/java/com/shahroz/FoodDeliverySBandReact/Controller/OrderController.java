package com.shahroz.FoodDeliverySBandReact.Controller;

import com.shahroz.FoodDeliverySBandReact.Services.OrdersService;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import com.shahroz.FoodDeliverySBandReact.entities.payment;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("order")
public class OrderController {
    @Autowired
    OrdersService ordersService;
//    @PutMapping("/{orderid}/{total}/update-subtotal")
//    public RequestEntity<?> UpdateSubtotal(@PathVariable String orderid,@PathVariable String total)
//    {
//
//        Long order_id = Long.valueOf(orderid);
//        Double totals = Double.valueOf(total);
//        try{
//
//            System.out.println("Updating subtotal");
//
//
//
//        }
//        catch (Exception e){
//            System.out.println(e);
//        }
//
//    }


    @PutMapping("/{orderid}")
    public ResponseEntity<orders> UpdatePayment(@PathVariable String orderid, @RequestBody payment payment) {
        Long order_id = Long.valueOf(orderid);

        orders order = ordersService.findById(order_id);

        if (order != null) {
            order.setPayment(payment);
            ordersService.createOrder(order);
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
