package app.seatsforplaces.service;

import app.seatsforplaces.model.Event;
import app.seatsforplaces.model.User;

import java.util.List;

public interface EventService {
    boolean testAddEvent(Event event);
    List<Event> getAll();
}
