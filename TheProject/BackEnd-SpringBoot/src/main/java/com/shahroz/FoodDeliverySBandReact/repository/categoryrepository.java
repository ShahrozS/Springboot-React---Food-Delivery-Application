package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface categoryrepository extends JpaRepository<Category,Long> {
}
