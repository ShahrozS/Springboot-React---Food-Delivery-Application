package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.orders;
import com.shahroz.FoodDeliverySBandReact.repository.Orderrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersService implements ordersServiceInterface {



    @Autowired
    Orderrepository orderrepository;

    public orders createOrder(orders order){
        return orderrepository.save(order);
    }

    @Override
    public orders findById(Long id) {
        return orderrepository.findById(id).orElse(null);
    }

//    public void updateTotal(double)

}
