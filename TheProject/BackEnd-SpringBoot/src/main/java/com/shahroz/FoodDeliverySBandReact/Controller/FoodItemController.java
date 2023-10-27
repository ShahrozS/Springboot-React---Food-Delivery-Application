package com.shahroz.FoodDeliverySBandReact.Controller;

import com.shahroz.FoodDeliverySBandReact.Services.CategoryService;
import com.shahroz.FoodDeliverySBandReact.Services.FooditemService;
import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.fooditem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("admin/home/FoodItems")
public class FoodItemController {

    @Autowired
    FooditemService fooditemService;

    @Autowired
    CategoryService categoryService;

    @PostMapping("/{category_name}/ShowAll/addItem")

    public ResponseEntity<?> createFoodItem(@PathVariable String category_name , @RequestBody fooditem fooditem){

        System.out.println(category_name);
        Long categoryid = categoryService.FindByName(category_name);
        System.out.println("Id = == = = =" +categoryid) ;
        fooditem.setCategory(categoryService.findById(categoryid));

      return ResponseEntity.ok( fooditemService.save(fooditem));
    }

    @GetMapping("/{category_name}/ShowAll")
    public List<fooditem> getAllFoodItems(){
        return fooditemService.FindAllFood();
    }

    @DeleteMapping("/{category_name}/ShowAll/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable String id){
        try {
//            long categoryId = Long.parseLong(id);
            fooditemService.deleteFoodItem(id);
            return ResponseEntity.ok("Food with ID " + id + " deleted successfully");
        } catch (NumberFormatException e) {
            System.out.println(e + id);
            return ResponseEntity.badRequest().body("Invalid ID: " + id);
        }
    }

}
