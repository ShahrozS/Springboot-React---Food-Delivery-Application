package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.Services.DeliveryService;
import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.Delivery;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DeliveryrepositoryTest {


    @Autowired
    Deliveryrepository deliveryrepository;
    @Autowired
    DeliveryService deliveryService;

    @Test
    void itShouldFindDeliveryByOrderid() {
        //given

    }
}