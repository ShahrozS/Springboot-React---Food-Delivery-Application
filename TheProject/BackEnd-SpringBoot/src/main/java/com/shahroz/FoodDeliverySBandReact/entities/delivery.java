package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class delivery {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long delivery_id;



    @ManyToOne
    private Delivery_Guy deliveryGuy;

    private LocalDateTime start_time;
    private LocalDateTime end_time;
    private String status;


    @OneToOne
    @JoinColumn(name = "order_id")
    private orders order_id;



    public delivery() {
    }


    public delivery(Long delivery_id, com.shahroz.FoodDeliverySBandReact.entities.payment payment, LocalDateTime start_time, LocalDateTime end_time, String status, orders order_id, Long payment_id) {
        this.delivery_id = delivery_id;

        this.start_time = start_time;
        this.end_time = end_time;
        this.status = status;
        this.order_id = order_id;

    }

    public delivery(Long delivery_id, Delivery_Guy deliveryGuy, LocalDateTime start_time, LocalDateTime end_time, String status, orders order_id) {
        this.delivery_id = delivery_id;
        this.deliveryGuy = deliveryGuy;
        this.start_time = start_time;
        this.end_time = end_time;
        this.status = status;
        this.order_id = order_id;
    }

    public Delivery_Guy getDeliveryGuy() {
        return deliveryGuy;
    }

    public void setDeliveryGuy(Delivery_Guy deliveryGuy) {
        this.deliveryGuy = deliveryGuy;
    }

    public LocalDateTime getStart_time() {
        return start_time;
    }

    public void setStart_time(LocalDateTime start_time) {
        this.start_time = start_time;
    }

    public LocalDateTime getEnd_time() {
        return end_time;
    }

    public void setEnd_time(LocalDateTime end_time) {
        this.end_time = end_time;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setOrder_id(orders order_id) {
        this.order_id = order_id;
    }

    public Long getDelivery_id() {
        return delivery_id;
    }

    public void setDelivery_id(Long delivery_id) {
        this.delivery_id = delivery_id;
    }


    public orders getOrder_id() {
        return order_id;
    }


}
