package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;

@Entity
public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long review_id;
    private String reviewText;
    private int Stars;


    @ManyToOne
    private User user;



}
