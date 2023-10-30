package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.order_details;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Order_detailsrepository extends JpaRepository<order_details,Long> {

List<order_details> findByOrderId(orders order_id);


}
