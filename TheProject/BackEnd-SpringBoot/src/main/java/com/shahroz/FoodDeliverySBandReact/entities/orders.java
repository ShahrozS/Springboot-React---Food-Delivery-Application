package com.shahroz.FoodDeliverySBandReact.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class orders {



@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long order_id;
private Date datetime;


@ManyToOne()
private User user;



private String status;

@OneToOne

@JoinColumn(name = "payment_id") // This is the foreign key column

private payment payment;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Reviews> reviews;


}
