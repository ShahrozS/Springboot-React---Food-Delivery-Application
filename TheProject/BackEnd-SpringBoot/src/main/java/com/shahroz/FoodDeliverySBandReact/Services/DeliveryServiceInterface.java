package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Delivery;
import com.shahroz.FoodDeliverySBandReact.entities.orders;

import java.util.Optional;

public interface DeliveryServiceInterface {

public Delivery saveDelivery(Delivery delivery);
    public Optional<Delivery> findById(Long id);

    public Delivery findByOrderid(orders order);

}
