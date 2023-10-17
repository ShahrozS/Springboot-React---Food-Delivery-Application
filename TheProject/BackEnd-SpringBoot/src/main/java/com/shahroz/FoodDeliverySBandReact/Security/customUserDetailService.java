package com.shahroz.FoodDeliverySBandReact.Security;

import com.shahroz.FoodDeliverySBandReact.entities.User;
import com.shahroz.FoodDeliverySBandReact.repository.Userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class customUserDetailService implements UserDetailsService {
  @Autowired
  private Userrepository userrepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //Loading User From Database

        User user = userrepository.findByEmail(username).orElseThrow(()-> new RuntimeException("User Not Found"));


        return user;
    }
}
