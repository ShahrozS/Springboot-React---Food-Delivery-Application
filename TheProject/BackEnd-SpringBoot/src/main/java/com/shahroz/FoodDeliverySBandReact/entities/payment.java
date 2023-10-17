package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;

@Entity
public class payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payment_id;







    @OneToOne()
    private orders order_id;
    private double amount;

    private String Mode;
    private Double TaxPercent;



    public payment() {
    }



    public payment(Long payment_id, orders order_id, double amount) {
        this.payment_id = payment_id;
        this.order_id = order_id;
        this.amount = amount;
    }

    public Long getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Long payment_id) {
        this.payment_id = payment_id;
    }

    public orders getOrder_id() {
        return order_id;
    }

    public void setOrder_id(orders order_id) {
        this.order_id = order_id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }


}
