package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.orders;
import com.shahroz.FoodDeliverySBandReact.entities.payment;
import com.shahroz.FoodDeliverySBandReact.repository.Paymentrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServic implements PaymentServiceInterface{

    @Autowired
    Paymentrepository paymentrepository;


    @Override
    public payment CreatePayment(payment payment) {
        return paymentrepository.save(payment);
    }
}
