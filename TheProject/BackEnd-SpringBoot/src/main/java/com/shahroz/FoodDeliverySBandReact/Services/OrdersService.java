package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.User;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import com.shahroz.FoodDeliverySBandReact.repository.Orderrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<orders> getAllOrders() {
       return orderrepository.findAll();
    }

    @Override
    public List<orders> findByUser(User user) {
        return orderrepository.findByUser(user);
    }


//    public void updateTotal(double)

}
