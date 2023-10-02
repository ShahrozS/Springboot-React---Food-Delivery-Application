package com.shahroz.FoodDeliverySBandReact.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // Object for User. // Admin will be differ or i will decide
@Table(name="users")
public class User {

    @Id
    private Long user_id;
    private Long email;
    private Long password;

    private String first_name;
    private String last_name;
    private String address;
    private Long phone_number;

    public User() {

    }


    public void setId(Long id) {
        this.user_id = id;
    }

    public Long getId() {
        return user_id;
    }

    public User(Long id, Long email, Long password, String first_name, String last_name, String address, Long phone_number) {
        this.user_id = id;
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.phone_number = phone_number;
    }


    public Long getEmail() {
        return email;
    }

    public void setEmail(Long email) {
        this.email = email;
    }

    public Long getPassword() {
        return password;
    }

    public void setPassword(Long password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(Long phone_number) {
        this.phone_number = phone_number;
    }
}


