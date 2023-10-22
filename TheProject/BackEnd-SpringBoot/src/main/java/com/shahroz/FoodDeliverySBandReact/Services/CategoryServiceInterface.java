package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Category;

import java.util.List;

public interface CategoryServiceInterface {

    List<Category> getAllCategory();
    public Category createCategory(Category category);
    void deleteCategory(Long id);

     Long FindByName(String name);

    Category findById(Long id);

}
