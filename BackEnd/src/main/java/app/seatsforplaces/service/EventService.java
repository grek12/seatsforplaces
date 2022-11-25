package app.seatsforplaces.service;

import app.seatsforplaces.model.Event;


import java.util.List;

public interface EventService {
    boolean testAddEvent(Event event);

    List<Event> getAll();
}
