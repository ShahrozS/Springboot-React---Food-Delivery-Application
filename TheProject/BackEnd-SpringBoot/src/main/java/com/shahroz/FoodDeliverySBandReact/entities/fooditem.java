package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.*;

@Entity
public class fooditem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long food_id;
    private String food_name;
    private String description;
    private double price;
    private String ingredients;




    @ManyToOne
    private Category category;
    public fooditem(Long food_id, String food_name, String description, double price, String ingredients, Category category) {
        this.food_id = food_id;
        this.food_name = food_name;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
        this.category = category;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public fooditem(Long food_id, String food_name, String description, double price, com.shahroz.FoodDeliverySBandReact.entities.order_details order_details, Category category) {
        this.food_id = food_id;
        this.food_name = food_name;
        this.description = description;
        this.price = price;

        this.category = category;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

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
