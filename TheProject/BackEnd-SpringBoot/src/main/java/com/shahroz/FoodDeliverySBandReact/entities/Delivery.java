package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Delivery {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long delivery_id;



    @OneToOne
    @JoinColumn(name = "delivery_guy", unique = false)
    private Delivery_Guy deliveryGuy;

    private LocalDateTime start_time;
    private LocalDateTime end_time;



    @OneToOne
    @JoinColumn(name = "order_id" , unique = false)
    private orders order_id;





}
