package app.seatsforplaces.repository;

import app.seatsforplaces.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EventRepository extends JpaRepository<Event,Long> {


}
