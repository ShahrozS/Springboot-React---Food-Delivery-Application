package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.order_details;
import com.shahroz.FoodDeliverySBandReact.entities.orders;

import java.util.List;

public interface Order_DetailServiceInterface {

    public order_details saveOrderDetail(order_details order_details);
    public List<order_details> findByOrderId(orders orders);

    public void deleteById(Long id);

    }
