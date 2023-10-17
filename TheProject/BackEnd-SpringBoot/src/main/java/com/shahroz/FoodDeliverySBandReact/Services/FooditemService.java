package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.fooditem;
import com.shahroz.FoodDeliverySBandReact.repository.Fooditemrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FooditemService implements FooditemServiceInterface {

    @Autowired
    private Fooditemrepository fooditemrepository;

    @Override
    public List<fooditem> findByCategory(Category category) {
        return fooditemrepository.findByCategory(category);
    }
}
