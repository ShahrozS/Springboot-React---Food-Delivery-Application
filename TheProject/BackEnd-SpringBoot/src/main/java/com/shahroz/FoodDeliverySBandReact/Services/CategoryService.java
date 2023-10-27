package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.repository.Categoryrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements CategoryServiceInterface {



    @Autowired
    private Categoryrepository categoryrepository;

    @Override
    public List<Category> getAllCategory() {
        return categoryrepository.findAll();
    }

    public Category createCategory(Category category){
        return categoryrepository.save(category);
    }

    @Override
    public void deleteCategory(Long id) {
        categoryrepository.deleteById(id);
    }

    @Override
    public Long FindByName(String name) {

        System.out.println("Name in Cat Service " + name);
        Category cat = categoryrepository.findByName(name);


        return cat.getId();
    }

    @Override
    public Category findById(Long id) {
        return categoryrepository.findById(id).orElse(null);

    }


}
