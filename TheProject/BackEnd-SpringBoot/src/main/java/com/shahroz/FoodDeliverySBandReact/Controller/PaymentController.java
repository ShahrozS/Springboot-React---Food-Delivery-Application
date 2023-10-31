package com.shahroz.FoodDeliverySBandReact.Controller;


import com.shahroz.FoodDeliverySBandReact.Services.PaymentServic;
import com.shahroz.FoodDeliverySBandReact.entities.payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("payment")
public class PaymentController {
//
//        @PostMapping
//        public RequestEntity<payment> createPayment(@RequestBody )

    @Autowired
    PaymentServic paymentServic;

    @PostMapping("/confirmorder")
    public payment CreatePayment(@RequestBody payment payment){

        System.out.println("Creating payment.");
        return paymentServic.CreatePayment(payment);

    }


}
