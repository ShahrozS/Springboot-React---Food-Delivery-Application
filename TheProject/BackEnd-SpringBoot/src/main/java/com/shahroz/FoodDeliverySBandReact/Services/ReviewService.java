package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Reviews;
import com.shahroz.FoodDeliverySBandReact.repository.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ReviewService implements ReviewServiceInterface {

    @Autowired
    ReviewsRepository reviewsRepository;


  public  Reviews createReview(Reviews reviews){
        return reviewsRepository.save(reviews);
    }

public List<Map<String,?>> showAllReviews(){
      return reviewsRepository.showAllReviews();
}

public List<Map<String,?>> showAllReviewsByID(Long id){
      return reviewsRepository.showAllReviewsById(id);
}





}
