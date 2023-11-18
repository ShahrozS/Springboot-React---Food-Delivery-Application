package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.Delivery;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Deliveryrepository extends JpaRepository<Delivery,Long> {

   Delivery findByOrderid(orders orders);
}
