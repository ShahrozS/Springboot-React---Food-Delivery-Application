//package com.shahroz.FoodDeliverySBandReact.entities;
//
//
//import jakarta.persistence.*;
//import org.springframework.security.core.GrantedAuthority;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//public class Authority implements GrantedAuthority {
//@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//private Long auth_id;
//private String authority;
//@ManyToOne(optional = false)
//private User user;
//
//
//
//public Authority(){
//
//}
//public  Authority(String authority){
//    this.authority = authority;
//}
//
//    public Long getAuth_id() {
//        return auth_id;
//    }
//
//    public void setAuth_id(Long auth_id) {
//        this.auth_id = auth_id;
//    }
//
//    @Override
//    public String getAuthority() {
//        return authority;
//    }
//
//    public void setAuthority(String authority) {
//        this.authority = authority;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//}
