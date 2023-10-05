package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class delivery {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long delivery_id;
    private Long order_id;
    private Long user_id;
    private Long payment_id;

    public delivery() {
    }

    public delivery(Long delivery_id, Long order_id, Long user_id, Long payment_id) {
        this.delivery_id = delivery_id;
        this.order_id = order_id;
        this.user_id = user_id;
        this.payment_id = payment_id;
    }

    public Long getDelivery_id() {
        return delivery_id;
    }

    public void setDelivery_id(Long delivery_id) {
        this.delivery_id = delivery_id;
    }

    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Long payment_id) {
        this.payment_id = payment_id;
    }
}
