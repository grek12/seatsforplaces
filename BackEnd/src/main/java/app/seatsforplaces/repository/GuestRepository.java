package app.seatsforplaces.repository;

import app.seatsforplaces.model.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GuestRepository extends JpaRepository<Guest,Long> {

}
