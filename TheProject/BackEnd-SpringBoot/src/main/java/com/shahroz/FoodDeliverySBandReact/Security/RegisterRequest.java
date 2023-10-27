package com.shahroz.FoodDeliverySBandReact.Security;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Data
public class RegisterRequest {
    private String first_name;
    private String last_name;
    private String phonenumber;
    private String address;
    private String email;
    private String password;

}
