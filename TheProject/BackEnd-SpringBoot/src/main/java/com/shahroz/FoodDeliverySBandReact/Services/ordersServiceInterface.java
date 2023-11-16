package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.orders;

import java.util.List;

public interface ordersServiceInterface {

    public orders createOrder(orders order);

public orders findById(Long id);

public List<orders> getAllOrders();
    }
