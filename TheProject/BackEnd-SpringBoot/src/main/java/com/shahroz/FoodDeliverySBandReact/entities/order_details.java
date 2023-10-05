package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class order_details
{


   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long slip_id;
   private Long order_id;
   private Long food_id;
   private int quantity;

   public order_details() {
   }

   public order_details(Long slip_id, Long order_id, Long food_id, int quantity) {
      this.slip_id = slip_id;
      this.order_id = order_id;
      this.food_id = food_id;
      this.quantity = quantity;
   }

   public Long getSlip_id() {
      return slip_id;
   }

   public void setSlip_id(Long slip_id) {
      this.slip_id = slip_id;
   }

   public Long getOrder_id() {
      return order_id;
   }

   public void setOrder_id(Long order_id) {
      this.order_id = order_id;
   }

   public Long getFood_id() {
      return food_id;
   }

   public void setFood_id(Long food_id) {
      this.food_id = food_id;
   }

   public int getQuantity() {
      return quantity;
   }

   public void setQuantity(int quantity) {
      this.quantity = quantity;
   }
}
