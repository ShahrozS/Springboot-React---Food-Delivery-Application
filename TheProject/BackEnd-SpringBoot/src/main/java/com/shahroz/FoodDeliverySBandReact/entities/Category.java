package com.shahroz.FoodDeliverySBandReact.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.cache.spi.support.AbstractReadWriteAccess;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long category_id;

    private String category_name;


    private Long Noofitems;

    @OneToMany( cascade = CascadeType.ALL,mappedBy = "category")
    private List<fooditem> fooditemList;

    public Category(Long category_id, String category_name, Long noofitems, List<fooditem> fooditemList) {
        this.category_id = category_id;
        this.category_name = category_name;
        Noofitems = noofitems;
        this.fooditemList = fooditemList;
    }

    public Long getNoofitems() {
        return Noofitems;
    }

    public void setNoofitems(Long noofitems) {
        Noofitems = noofitems;
    }

    public List<fooditem> getFooditemList() {
        return fooditemList;
    }

    public void setFooditemList(List<fooditem> fooditemList) {
        this.fooditemList = fooditemList;
    }

    public Category() {
    }

    public Category(Long category_id, String category_name, Long food_id) {
        this.category_id = category_id;
        this.category_name = category_name;

    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

}
