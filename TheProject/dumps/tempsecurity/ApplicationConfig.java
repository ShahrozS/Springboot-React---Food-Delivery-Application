//package com.shahroz.FoodDeliverySBandReact.tempsecurity;
//
//import com.shahroz.FoodDeliverySBandReact.repository.Userrepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
//@Configuration
//@RequiredArgsConstructor
//public class ApplicationConfig {
//
//
//    private final Userrepository userrepository;
//    @Bean
//    public UserDetailsService userDetailsService(){
//        return username -> userrepository.findByEmail(username)
//                .orElseThrow(()-> new UsernameNotFoundException("username not found "));
//    }
//}
