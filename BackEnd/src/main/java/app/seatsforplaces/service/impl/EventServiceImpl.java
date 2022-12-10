package app.seatsforplaces.service.impl;

import app.seatsforplaces.model.Event;
import app.seatsforplaces.model.Seat;
import app.seatsforplaces.repository.EventRepository;
import app.seatsforplaces.repository.GuestRepository;
import app.seatsforplaces.repository.SeatRepository;
import app.seatsforplaces.repository.UserRepository;
import app.seatsforplaces.security.service.UserDetailsImpl;
import app.seatsforplaces.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private  UserRepository userRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private GuestRepository guestRepository;



    //если гостя нет, то создать его...; 1 гость все вип гости...
    @Override
    public Long testAddEvent(Event event) {
        UserDetailsImpl userTemp = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long id = userTemp.getId();
        int num = userTemp.getCreationnum();

        if(num!=0){

            eventRepository.saveAndFlush(event);

            userRepository.addData(id,event.getId());
            int num2 = num-1;
            userRepository.setnum(num2,id);
            guestRepository.saveAllAndFlush(event.getGuests());

            List <Seat> col = Arrays.stream(event.getSeats()).flatMap(Arrays::stream).collect(Collectors.toList());
            seatRepository.saveAllAndFlush(col);
            Long eventId = event.getId();
            return eventId;
        }else{
        return Long.valueOf(0);
        }
    }






    @Override
    public List<Event> getAll() {
        return eventRepository.findAll();
    }

    @Override
    public Optional<Event> getEvent(Long id) {
       return eventRepository.findById(id);
    }

    @Override
    public boolean chooseplace(Event event) {
        UserDetailsImpl userTemp = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long userId = userTemp.getId();
        Long eventId =event.getId();
        eventRepository.findById(eventId).get().setSeats(event.getSeats());


        eventRepository.findById(eventId).get().setGuests(event.getGuests());

        guestRepository.saveAllAndFlush(event.getGuests());
        return true;
    }
}
