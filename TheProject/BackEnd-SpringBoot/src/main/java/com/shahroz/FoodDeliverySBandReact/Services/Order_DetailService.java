package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.order_details;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import com.shahroz.FoodDeliverySBandReact.repository.Order_detailsrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Order_DetailService implements Order_DetailServiceInterface{

    @Autowired
    Order_detailsrepository orderDetailsrepository;



    @Override
    public order_details saveOrderDetail(order_details order_details) {
        return orderDetailsrepository.save(order_details);
    }
}
