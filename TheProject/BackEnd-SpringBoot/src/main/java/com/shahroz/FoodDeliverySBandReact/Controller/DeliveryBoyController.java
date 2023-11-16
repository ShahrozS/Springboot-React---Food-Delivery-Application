package com.shahroz.FoodDeliverySBandReact.Controller;

import com.shahroz.FoodDeliverySBandReact.Services.DeliveryGuyService;
import com.shahroz.FoodDeliverySBandReact.Services.DeliveryService;
import com.shahroz.FoodDeliverySBandReact.entities.Delivery_Guy;
import com.shahroz.FoodDeliverySBandReact.entities.Delivery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
    @RequestMapping("DeliveryBoys")

public class DeliveryBoyController {

    @Autowired
    DeliveryGuyService deliveryGuyService;

    @GetMapping
    public List<Delivery_Guy> getAllDeliveryGuys(){

        System.out.println("Finding categories from Admin");
        return deliveryGuyService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Delivery_Guy> findById(@PathVariable String id){
        System.out.println("Fidning by id");

        try {

            long DeliveryGuyId = Long.parseLong(id);

           return deliveryGuyService.findById(DeliveryGuyId);
        } catch (NumberFormatException e) {
            System.out.println(e + id);
        return null;
        }
    }



    @PostMapping("/addDeliveryGuy")
    public Delivery_Guy saveDeliveryGuy(@RequestBody Delivery_Guy deliveryGuy){
        return deliveryGuyService.createDeliveryGuy(deliveryGuy);

    }
        @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDeliveryGuy(@PathVariable String id){
        try {
//            long categoryId = Long.parseLong(id);
            deliveryGuyService.deleteDeliveryGuy(id);
            return ResponseEntity.ok("Delivery guy with ID " + id + " deleted successfully");
        } catch (NumberFormatException e) {
            System.out.println(e + id);
            return ResponseEntity.badRequest().body("Invalid ID: " + id);
        }
    }


    @Autowired
    DeliveryService deliveryService;

        @PostMapping("/delivery")
    public Delivery saveDelivery(@RequestBody Delivery delivery){
            System.out.println("In delivery making");
        return deliveryService.saveDelivery(delivery);
    }

}
