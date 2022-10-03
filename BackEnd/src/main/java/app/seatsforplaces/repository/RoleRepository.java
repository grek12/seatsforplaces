package app.seatsforplaces.repository;


import app.seatsforplaces.model.ERole;
import app.seatsforplaces.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {


    Optional<Role> findByName(ERole name);
}
