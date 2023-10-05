package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.fooditem;
import com.shahroz.FoodDeliverySBandReact.entities.payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface fooditemrepository extends JpaRepository<fooditem,Long> {
}
