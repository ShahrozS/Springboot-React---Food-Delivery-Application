package com.shahroz.FoodDeliverySBandReact.repository;

import com.shahroz.FoodDeliverySBandReact.Services.CategoryService;
import com.shahroz.FoodDeliverySBandReact.entities.Category;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CategoryrepositoryTest {


    @Autowired
    private Categoryrepository underTest;

    @Autowired
    private CategoryService service;

    @Test
    void itShouldFindCategoryByName() {

        //given
        Category category = new Category(1l,"Check",0l);

        underTest.save(category);

        //when
        Long exist=service.FindByName("Check");

        //then
        Long expected = 1l;

        assertThat(exist).isEqualTo(expected);


    }
}