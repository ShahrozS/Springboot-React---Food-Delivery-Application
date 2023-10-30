package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class order_details
{


   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long slip_id;


   @OneToOne
   @JoinColumn(name = "order_id_order_id")
   private orders orderId;

   @ManyToOne
   @JoinColumn(name = "food_id")
   private fooditem foodItem;
   private int quantity;

}
