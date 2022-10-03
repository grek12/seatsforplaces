package app.seatsforplaces.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class LoginRequest {

    @NotBlank
    private String phonenumber;

    @NotBlank
    private String password;

}
