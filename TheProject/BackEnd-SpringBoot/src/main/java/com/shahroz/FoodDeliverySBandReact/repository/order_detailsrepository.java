package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.order_details;
import com.shahroz.FoodDeliverySBandReact.entities.payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface order_detailsrepository extends JpaRepository<order_details,Long> {
}
