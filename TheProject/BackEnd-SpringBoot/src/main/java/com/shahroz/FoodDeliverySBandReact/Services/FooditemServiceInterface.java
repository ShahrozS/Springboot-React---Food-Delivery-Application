package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.fooditem;

import java.util.List;

public interface FooditemServiceInterface {

    List<fooditem> findByCategory(Category category);


}
