package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.User;

import java.util.List;
import java.util.Optional;
public interface UserServiceInterface {

    public User saveEmployee(User user);
    public Optional<User> getUserById(Long id);
    List<User> getAllUser();
    User updateUser(Long id, User user);
    void deleteEmployee();




}
