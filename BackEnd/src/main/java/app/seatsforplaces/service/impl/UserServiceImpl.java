package app.seatsforplaces.service.impl;

import app.seatsforplaces.repository.UserRepository;
import app.seatsforplaces.security.service.UserDetailsImpl;
import app.seatsforplaces.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public @NotBlank @Size(max = 100) int getNum() {
        UserDetailsImpl userTemp = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        int num = userTemp.getCreationnum();
        return num;
    }
}
