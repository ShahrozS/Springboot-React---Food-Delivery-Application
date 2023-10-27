package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;


@Repository
public interface Userrepository extends JpaRepository<User,Long> {

    @Query("Select u.user_id from User u where u.email = :email")
    public Long findIdByEmail(@Param("email") String email);

    public Optional<User> findByEmail(String email);

}