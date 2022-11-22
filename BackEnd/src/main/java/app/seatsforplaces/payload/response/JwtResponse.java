package app.seatsforplaces.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class JwtResponse {

    private String token;

    private String type = "Bearer";

   private Long id;

    private String phonenumber;

   private List<String> roles;

    public JwtResponse(String accessToken, Long id, String phonenumber,  List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.phonenumber = phonenumber;
        this.roles = roles;
    }
    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public List<String> getRoles() {
        return roles;
    }


}
