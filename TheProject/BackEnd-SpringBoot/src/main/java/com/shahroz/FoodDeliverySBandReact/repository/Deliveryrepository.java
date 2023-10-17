package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.delivery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Deliveryrepository extends JpaRepository<delivery,Long> {
}
