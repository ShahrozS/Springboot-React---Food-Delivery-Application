package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.orders;

public interface ordersServiceInterface {

    public orders createOrder(orders order);

public orders findById(Long id);
    }
