//package com.shahroz.FoodDeliverySBandReact.Service;
//import com.shahroz.FoodDeliverySBandReact.entities.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import com.shahroz.FoodDeliverySBandReact.util.CustomPasswordEncoder;
//
//@Service
//public class UserDetailsServiceImp implements org.springframework.security.core.userdetails.UserDetailsService {
//
//@Autowired
//private CustomPasswordEncoder passwordEncoder;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//     User user  = new User();
//     user.setEmail(username);
//     user.setPassword(passwordEncoder.getPasswordEncoder().encode("abc"));
//     user.setId(1L);
//      return new User();
//    }
//}
