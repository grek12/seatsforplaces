package app.seatsforplaces.service;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public interface UserService {

    @NotBlank @Size(max = 100) int getNum();
}
