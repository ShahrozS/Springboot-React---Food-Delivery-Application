package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.Delivery_Guy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface Delivery_guyrepository extends JpaRepository<Delivery_Guy,Long> {

    @Modifying
    @Query(value = "CALL \"proc_updateDeliveryBoyStatus\"(:deliveryguyid, :status);", nativeQuery = true)
    void updateDelivery_Guy(@Param("deliveryguyid") Long id, @Param("status") String status);


    @Modifying
    @Query(value= "CALL \"proc_updateAllDeliveryGuys\"();",nativeQuery = true)
    void updateAllDelivery_Guy();






}
