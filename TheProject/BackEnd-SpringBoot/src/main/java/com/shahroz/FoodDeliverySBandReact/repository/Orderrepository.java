package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.User;
import com.shahroz.FoodDeliverySBandReact.entities.orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Orderrepository extends JpaRepository<orders,Long> {
    public List<orders> findByUser(User user);
}
