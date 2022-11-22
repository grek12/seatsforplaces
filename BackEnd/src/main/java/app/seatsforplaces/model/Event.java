package app.seatsforplaces.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Calendar;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "events")
public class Event {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 30)
    private String nameevent;

    @NotBlank
    @Size(max = 400)
    private String address;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    @DateTimeFormat
    private Calendar datetime;

    @NotEmpty
    @Type( type = "app.seatsforplaces.service.impl.BiDirectionalIntArrayUserType")
    @Column(columnDefinition = "int[][]")
    private int[][] seatnum;

    public Event(String nameevent,String address, Calendar datetime, int[][] seatnum){
        this.nameevent = nameevent;
        this.address=address;
        this.datetime=datetime;
        this.seatnum=seatnum;

    }


}
