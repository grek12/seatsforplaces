package app.seatsforplaces.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@AllArgsConstructor
public class UserInfoResponse {

    private Long id;

    private String phonenumber;

   private List<String> roles;


}
