package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.User;

import java.util.List;
import java.util.Optional;
public interface UserServiceInterface {

    public User createUser(User user);
    public User findById(Long id);
    List<User> getUsers();
    User updateUser(Long id, User user);
    Optional<User> deleteUser(Long id);

    User findByEmail(String email);




}
