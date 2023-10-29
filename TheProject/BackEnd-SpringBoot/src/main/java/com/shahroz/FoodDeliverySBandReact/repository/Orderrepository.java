package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Orderrepository extends JpaRepository<orders,Long> {
}
