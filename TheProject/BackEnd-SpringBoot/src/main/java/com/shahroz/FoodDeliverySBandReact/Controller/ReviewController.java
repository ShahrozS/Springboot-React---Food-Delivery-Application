package com.shahroz.FoodDeliverySBandReact.Controller;


import com.shahroz.FoodDeliverySBandReact.Services.ReviewService;
import com.shahroz.FoodDeliverySBandReact.entities.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("review")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @PostMapping("/create")
    public Reviews createReview(@RequestBody Reviews reviews){
        System.out.println("Creating review.");


        System.out.println(reviews.getOrder());
        return  reviewService.createReview(reviews);
    }


    @GetMapping("/allReviews")
    public List<Map<String,?>> showAllReviews(){

        return reviewService.showAllReviews();

    }

    @GetMapping("/reviewByID/{userid}")
    public List<Map<String,?>> showAllReviewsByID(@PathVariable String userid){
        Long user_id = Long.valueOf(userid);

        return reviewService.showAllReviewsByID(user_id);
    }

}
