//package com.shahroz.FoodDeliverySBandReact.tempsecurity;
//
//
//import com.shahroz.FoodDeliverySBandReact.Security.JwtAuthenticationEntryPoint;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//@RequiredArgsConstructor
//public class SecurityConfig {
//    @Autowired
//    private JwtAuthenticationEntryPoint point;
//
//
//    private final JwtAuthenticationFilter jwtAuthfilter;
//
//    @Bean
//public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//http
//        .csrf(csrf -> csrf.disable()).authorizeRequests().requestMatchers("").permitAll().anyRequest().authenticated().and().exceptionHandling(ex -> ex.authenticationEntryPoint(point))
//        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//        http.addFilterBefore(jwtAuthfilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//}
