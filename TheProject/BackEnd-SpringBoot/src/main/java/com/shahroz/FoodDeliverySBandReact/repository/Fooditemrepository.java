package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.fooditem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Fooditemrepository extends JpaRepository<fooditem,Long> {
    List<fooditem> findByCategory(Category category);




}
