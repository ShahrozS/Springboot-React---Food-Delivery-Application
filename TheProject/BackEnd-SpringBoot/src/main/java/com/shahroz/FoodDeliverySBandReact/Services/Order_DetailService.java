package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.order_details;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import com.shahroz.FoodDeliverySBandReact.repository.Order_detailsrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Order_DetailService implements Order_DetailServiceInterface{

    @Autowired
    Order_detailsrepository orderDetailsrepository;



    @Override
    public order_details saveOrderDetail(order_details order_details) {
        return orderDetailsrepository.save(order_details);
    }

    @Override
    public List<order_details> findByOrderId(orders orders) {
        return orderDetailsrepository.findByOrderId(orders);
    }

    @Override
    public void deleteById(Long id) {
        orderDetailsrepository.deleteById(id);
    }
}
