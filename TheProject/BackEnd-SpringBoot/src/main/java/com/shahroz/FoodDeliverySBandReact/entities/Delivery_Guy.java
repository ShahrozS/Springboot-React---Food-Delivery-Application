package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;

import java.util.List;

@Entity
public class Delivery_Guy {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Delivery_Guy_id;
    private String name;
    private String vehicle;

    @OneToMany(mappedBy = "Delivery_Guy")
    private List<delivery> Delivery_id;

    private Long NoofOrders;

    private Long Phonenumber;

    public Delivery_Guy() {
    }

    public Delivery_Guy(Long delivery_Guy_id, String name, String vehicle, List<delivery> delivery_id, Long noofOrders, Long phonenumber) {
        Delivery_Guy_id = delivery_Guy_id;
        this.name = name;
        this.vehicle = vehicle;
        Delivery_id = delivery_id;
        NoofOrders = noofOrders;
        Phonenumber = phonenumber;
    }

    public Long getDelivery_Guy_id() {
        return Delivery_Guy_id;
    }

    public void setDelivery_Guy_id(Long delivery_Guy_id) {
        Delivery_Guy_id = delivery_Guy_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVehicle() {
        return vehicle;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public List<delivery> getDelivery_id() {
        return Delivery_id;
    }

    public void setDelivery_id(List<delivery> delivery_id) {
        Delivery_id = delivery_id;
    }

    public Long getNoofOrders() {
        return NoofOrders;
    }

    public void setNoofOrders(Long noofOrders) {
        NoofOrders = noofOrders;
    }

    public Long getPhonenumber() {
        return Phonenumber;
    }

    public void setPhonenumber(Long phonenumber) {
        Phonenumber = phonenumber;
    }
}
