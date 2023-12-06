package com.shahroz.FoodDeliverySBandReact.Services;

import com.shahroz.FoodDeliverySBandReact.entities.Category;
import com.shahroz.FoodDeliverySBandReact.entities.Delivery_Guy;
import com.shahroz.FoodDeliverySBandReact.repository.Delivery_guyrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class DeliveryGuyService implements DeliveryGuyServiceInterface {

    @Autowired
    Delivery_guyrepository deliveryGuyrepository;

    public List<Delivery_Guy> getAll(){

        return deliveryGuyrepository.findAll();
    }

    @Override
    public Optional<Delivery_Guy> findById(Long id) {
        return deliveryGuyrepository.findById(id);
    }
    public Delivery_Guy createDeliveryGuy(Delivery_Guy deliveryGuy){
        return deliveryGuyrepository.save(deliveryGuy);
    }

    @Override
    public void deleteDeliveryGuy(String id) {
        deliveryGuyrepository.deleteById(Long.parseLong(id));
    }

    @Transactional
    public void updateDeliveryGuy(Long id, String status){
        System.out.println("Updating delivery guy:  " + id +  " status : " + status);
        deliveryGuyrepository.updateDelivery_Guy(id,status);
    }

    @Transactional
    public void updateAllDeliveryGuy(){
        System.out.println("Updating all delvery guy");
        deliveryGuyrepository.updateAllDelivery_Guy();
    }

}
