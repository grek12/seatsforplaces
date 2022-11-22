package app.seatsforplaces.service.impl;

import app.seatsforplaces.model.Event;
import app.seatsforplaces.repository.EventRepository;
import app.seatsforplaces.repository.UserRepository;
import app.seatsforplaces.security.service.UserDetailsImpl;
import app.seatsforplaces.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private  UserRepository userRepository;



    @Override
    public boolean testAddEvent(Event event) {
        UserDetailsImpl userTemp = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long id = userTemp.getId();
        int num = userTemp.getCreationnum();

        if(num!=0){
            eventRepository.saveAndFlush(event);
            userRepository.addData(id,event.getId());
            int num2 = num-1;
            userRepository.setnum(num2,id);
            return true;
        }else{
        return false;
        }
    }






    @Override
    public List<Event> getAll() {
        return eventRepository.findAll();
    }
}
