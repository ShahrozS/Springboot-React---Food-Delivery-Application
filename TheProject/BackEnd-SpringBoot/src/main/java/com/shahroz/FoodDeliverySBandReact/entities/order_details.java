package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class order_details
{


   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long slip_id;


   @OneToOne
   private orders order_id;

   @ManyToOne
   @JoinColumn(name = "food_id")
   private fooditem foodItem;
   private int quantity;

   public order_details(Long slip_id, orders order_id, fooditem foodItem, int quantity) {
      this.slip_id = slip_id;
      this.order_id = order_id;
      this.foodItem = foodItem;
      this.quantity = quantity;
   }

   public fooditem getFoodItem() {
      return foodItem;
   }

   public void setFoodItem(fooditem foodItem) {
      this.foodItem = foodItem;
   }

   public order_details() {
   }



   public Long getSlip_id() {
      return slip_id;
   }

   public void setSlip_id(Long slip_id) {
      this.slip_id = slip_id;
   }

   public orders getOrder_id() {
      return order_id;
   }

   public void setOrder_id(orders order_id) {
      this.order_id = order_id;
   }


   public int getQuantity() {
      return quantity;
   }

   public void setQuantity(int quantity) {
      this.quantity = quantity;
   }
}
