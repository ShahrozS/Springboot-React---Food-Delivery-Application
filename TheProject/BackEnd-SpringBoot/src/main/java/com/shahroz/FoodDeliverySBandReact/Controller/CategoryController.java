package com.shahroz.FoodDeliverySBandReact.Controller;


import com.shahroz.FoodDeliverySBandReact.Services.CategoryService;
import com.shahroz.FoodDeliverySBandReact.entities.Category;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


@PostMapping("/create")
public ResponseEntity<?> createCategory(@RequestBody Category category){
    System.out.println("Workssss");
    Category newCategory = categoryService.createCategory(category);
    return ResponseEntity.ok(newCategory );
}

    @GetMapping("")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok( categoryService.getAllCategory());
    }


}

