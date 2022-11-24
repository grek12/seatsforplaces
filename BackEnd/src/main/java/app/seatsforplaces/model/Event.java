package app.seatsforplaces.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.*;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "events")
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class Event implements Serializable {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private int columns;
    @NotBlank
    private int rows;

    @NotBlank
    @Size(max = 30)
    private String nameevent;

    @NotBlank
    @Size(max = 400)
    private String address;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    @DateTimeFormat
    private Calendar datetime;

    @Type(type = "jsonb")
    @Column(columnDefinition = "jsonb")
    private Seat[][] seats;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "event_guests",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "guest_id"))
    private List<Guest> guests;




    public Event(String nameevent, String address, Calendar datetime, int columns, int rows, Seat[][] seats, List<Guest> guests){
        this.nameevent = nameevent;
        this.address=address;
        this.datetime=datetime;
        this.columns = columns;
        this.rows = rows;
        this.seats = seats;
        this.guests = guests;
    }


}
