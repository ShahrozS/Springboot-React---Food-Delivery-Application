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

    @Override
    public fooditem save(fooditem fooditem) {
    return fooditemrepository.save(fooditem);
    }

    @Override
    public void deleteFoodItem(String id) {
    fooditemrepository.deleteById(Long.parseLong(id));
    }

    public List<fooditem>  FindAllFood(){
        return fooditemrepository.findAll();
    }

    @Override
    public fooditem findByID(Long id) {
        return fooditemrepository.findById(id).orElse(null);
    }


}
