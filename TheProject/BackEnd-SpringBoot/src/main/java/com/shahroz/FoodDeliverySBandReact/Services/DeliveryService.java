package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Delivery;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import com.shahroz.FoodDeliverySBandReact.repository.Deliveryrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DeliveryService implements DeliveryServiceInterface{

    @Autowired
Deliveryrepository deliveryrepository;


    @Override
    public Delivery saveDelivery(Delivery delivery) {
        return deliveryrepository.save(delivery);
    }

    public Optional<Delivery> findById(Long id){
        return deliveryrepository.findById(id);
    }

    @Override
    public Delivery findByOrderid(orders order) {

        return deliveryrepository.findByOrderid(order);
    }


}
