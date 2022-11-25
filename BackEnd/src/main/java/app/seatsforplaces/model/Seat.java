package app.seatsforplaces.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "seats")
public class Seat implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int x;

    private int y;



    @OneToOne(fetch = FetchType.LAZY)
    private Guest guest;


    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private TypeSeats type;



}
