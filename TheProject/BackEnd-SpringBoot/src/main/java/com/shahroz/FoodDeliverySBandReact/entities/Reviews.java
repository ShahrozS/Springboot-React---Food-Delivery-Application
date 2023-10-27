package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long review_id;
    private String reviewText;
    private int Stars;


    @ManyToOne
    private User user;



}
