package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Reviews;

import java.util.List;
import java.util.Map;

public interface ReviewServiceInterface {

 public  Reviews createReview(Reviews reviews);
 public List<Map<String,?>> showAllReviews();
 public List<Map<String,?>> showAllReviewsByID(Long id);



}
