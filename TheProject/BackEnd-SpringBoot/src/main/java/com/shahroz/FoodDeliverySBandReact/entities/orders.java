package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class orders {



@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long order_id;
private Date datetime;


@ManyToOne(fetch = FetchType.EAGER)
private User user;



private String status;

@OneToOne

@JoinColumn(name = "payment_id") // This is the foreign key column

private payment payment;




}
