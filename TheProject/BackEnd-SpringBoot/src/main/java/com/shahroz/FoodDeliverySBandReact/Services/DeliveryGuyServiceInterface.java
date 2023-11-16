package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Delivery_Guy;

import java.util.List;
import java.util.Optional;

public interface DeliveryGuyServiceInterface {


    public List<Delivery_Guy> getAll();
    public Optional<Delivery_Guy> findById(Long id);
    public Delivery_Guy createDeliveryGuy(Delivery_Guy deliveryGuy);

    public void deleteDeliveryGuy(String id);

    }
