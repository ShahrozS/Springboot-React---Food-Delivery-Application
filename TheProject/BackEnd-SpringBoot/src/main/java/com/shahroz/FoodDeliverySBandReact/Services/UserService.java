package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.User;
import com.shahroz.FoodDeliverySBandReact.repository.Userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserServiceInterface{


    @Autowired
    private Userrepository userrepository;

    @Autowired
    PasswordEncoder passwordEncoder;



    public List<User> getUsers(){
return userrepository.findAll();
    }

    public User createUser(User user){
user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userrepository.save(user);
    }


    @Override
    public User findById(Long id) {
        return userrepository.findById(id).orElse(null);
    }



    @Override
    public User updateUser(Long id, User user) {


        User existinguser = userrepository.findById(id).orElseThrow(()->new RuntimeException("Entity not found"));
        existinguser.setPhone_number(user.getPhone_number());


        existinguser.setFirst_name(user.getFirst_name());

        existinguser.setLast_name(user.getLast_name());

        existinguser.setAddress(user.getAddress());

existinguser.setEmail(user.getEmail());

return userrepository.save(existinguser);



    }

    @Override
    public Optional<User> deleteUser(Long id) {

        Optional<User> user = userrepository.findById(id);
 userrepository.deleteById(id);

 return user;

    }


    @Override
    public User findByEmail(String email) {
        System.out.println("EMAILL in service " + email);
        return findById(userrepository.findIdByEmail(email));
    }
}
