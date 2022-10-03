package app.seatsforplaces.repository;

import app.seatsforplaces.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<User,Long> {
    Optional<User> findByPhonenumber(String phonenumber);
    boolean existsByPhonenumber(String phonenumber);

}
