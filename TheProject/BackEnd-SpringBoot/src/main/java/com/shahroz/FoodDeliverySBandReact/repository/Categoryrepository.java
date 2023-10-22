package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


public interface Categoryrepository extends JpaRepository<Category,Long> {

    @Query("SELECT e.category_id FROM Category e WHERE e.category_name = :name")

    Long findByName(@Param("name") String name);

}
