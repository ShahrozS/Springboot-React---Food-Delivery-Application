package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class fooditem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long food_id;
    private String food_name;
    private String description;
    private double price;

    public fooditem() {
    }

    public fooditem(Long food_id, String food_name, String description, double price) {
        this.food_id = food_id;
        this.food_name = food_name;
        this.description = description;
        this.price = price;
    }

    public Long getFood_id() {
        return food_id;
    }

    public void setFood_id(Long food_id) {
        this.food_id = food_id;
    }

    public String getFood_name() {
        return food_name;
    }

    public void setFood_name(String food_name) {
        this.food_name = food_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
