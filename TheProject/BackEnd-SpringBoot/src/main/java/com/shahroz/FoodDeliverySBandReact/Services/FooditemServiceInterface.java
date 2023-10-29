package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.fooditem;

import java.util.List;

public interface FooditemServiceInterface {

    List<fooditem> findByCategory(Category category);

    public fooditem save(fooditem fooditem);

    public void deleteFoodItem(String id);
    public List<fooditem>  FindAllFood();

    public fooditem findByID(Long id);

}
