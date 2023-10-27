package com.shahroz.FoodDeliverySBandReact.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payment_id;






    @OneToOne
    @JoinColumn(name = "order_id") // This is the foreign key column
    private orders order;
    private double amount;

    private String Mode;
    private Double TaxPercent;






    public Long getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Long payment_id) {
        this.payment_id = payment_id;
    }



    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }


}
