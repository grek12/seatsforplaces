package app.seatsforplaces.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
public class SignupRequest {


    @NotBlank
    @Size(min = 2, max = 30)
    private String name;

    @NotBlank
    @Size(max = 11)
    private String email;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    private Set<String> role;

}
