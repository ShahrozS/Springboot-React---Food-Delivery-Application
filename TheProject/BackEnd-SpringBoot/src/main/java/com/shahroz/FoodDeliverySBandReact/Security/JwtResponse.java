package com.shahroz.FoodDeliverySBandReact.Security;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class JwtResponse {

private String jwtToken;
private String username;
}
