package app.seatsforplaces.controller;


import app.seatsforplaces.model.Event;

import app.seatsforplaces.payload.response.MessageResponse;
import app.seatsforplaces.service.impl.EventServiceImpl;
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

    

    @PostMapping("/user/testcreateevent")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> newEventTest(@RequestBody Event newEvent){

        if (eventService.testAddEvent(newEvent)==true){
           return ResponseEntity
                    .ok(new MessageResponse("Create event successfully!"));
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
    public String userAcces(){

        return "User Contetnt.";
    }
}