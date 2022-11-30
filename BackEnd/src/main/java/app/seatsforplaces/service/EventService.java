package app.seatsforplaces.service;

import app.seatsforplaces.model.Event;


import java.util.List;
import java.util.Optional;

public interface EventService {
    boolean testAddEvent(Event event);

    List<Event> getAll();

    Optional<Event> getEvent(Long id);


}
