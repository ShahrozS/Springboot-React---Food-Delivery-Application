package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Delivery_Guy {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long Delivery_Guy_id;
    private String name;
    private String vehicle;


private String status;

    private Long Phonenumber;


}
