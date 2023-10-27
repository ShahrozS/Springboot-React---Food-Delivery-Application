package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;

@Entity
public class orders {



@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long order_id;
private String datetime;


@ManyToOne(fetch = FetchType.EAGER)
private User user;

@OneToOne
private order_details order_details;



    public orders(Long order_id, String datetime, User user, com.shahroz.FoodDeliverySBandReact.entities.order_details order_details, com.shahroz.FoodDeliverySBandReact.entities.payment payment) {
        this.order_id = order_id;
        this.datetime = datetime;
        this.user = user;
        this.order_details = order_details; }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public com.shahroz.FoodDeliverySBandReact.entities.order_details getOrder_details() {
        return order_details;
    }

    public void setOrder_details(com.shahroz.FoodDeliverySBandReact.entities.order_details order_details) {
        this.order_details = order_details;
    }



    public orders(Long order_id, String datetime, Long user_id, Long id, User user) {
        this.order_id = order_id;
        this.datetime = datetime;

    }

    public orders() {

    }

    public Long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Long order_id) {
        this.order_id = order_id;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }




}
