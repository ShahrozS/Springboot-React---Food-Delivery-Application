package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.entities.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;
import java.util.Map;

public interface ReviewsRepository extends JpaRepository<Reviews,Long> {



    @Query(nativeQuery = true, value = "select * from   func_AllReviewsForAdmin()")
    List<Map<String,?>> showAllReviews();

    @Query(nativeQuery = true,value="select * from func_allreviewsforaUser(?1)")
    List<Map<String,?>>  showAllReviewsById(Long userid);
}
