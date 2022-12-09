package app.seatsforplaces.controller;


import app.seatsforplaces.model.Event;

import app.seatsforplaces.payload.response.MessageResponse;
import app.seatsforplaces.service.impl.EventServiceImpl;
import app.seatsforplaces.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.*;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class testController {

    @Autowired
    private EventServiceImpl eventService;

    @Autowired
    private UserServiceImpl userService;
    

    @PostMapping("/user/testcreateevent")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> newEventTest(@RequestBody Event newEvent){
            Long id = eventService.testAddEvent(newEvent);
        if (id!=0){
           return ResponseEntity
                    .ok(id);
        }else{
           return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: There is no way to create an event, pay the bill.") );
        }

    }


    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAcces(){
        return "Admin Contetnt.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userAcces(){


      return   ResponseEntity
                .ok(new MessageResponse("работает))"));
    }

  //гет эвента, гет эвентов
    @GetMapping("/user/events")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getEvents(){
        return ResponseEntity.ok(eventService.getAll());
    }

    @GetMapping("/user/event/{eventId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getEvent(@PathVariable Long  eventId){

        return ResponseEntity.ok(eventService.getEvent(eventId));
    }


    @GetMapping("/user/getnum")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> userGetNum() {
        return ResponseEntity
                .ok(userService.getNum());
    }

        @PostMapping("/user/updateeevent")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateEvent(@RequestBody Event event){

        if(eventService.chooseplace(event)){
        return ResponseEntity
                .ok(new MessageResponse("OK."));
        }else return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error"));
    }

}
