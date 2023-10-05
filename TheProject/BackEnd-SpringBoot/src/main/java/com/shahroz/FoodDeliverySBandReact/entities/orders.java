package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;

@Entity
public class orders {



@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long order_id;
private String datetime;

@ManyToOne(optional = false)
private User user;



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public orders(Long order_id, String datetime, Long user_id, Long id, User user) {
        this.order_id = order_id;
        this.datetime = datetime;

        this.user = user;
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
