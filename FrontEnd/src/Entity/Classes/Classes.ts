import { IGuest, IPlace, ISeats, TypeSeats } from "../Interfaces/Interfaces";

export class Place implements IPlace{
    columns : number;
    rows : number;
    array : ISeats[][];
    guest : IGuest[];
    placeName : string;
    constructor (Array : ISeats[][], Rows : number, Columns : number,
         Guest : IGuest[], PlaceName : string)
    {
        this.columns = Columns;
        this.array = Array;
        this.rows = Rows;
        this.guest = Guest;
        this.placeName = PlaceName;
    }
}

export class Guest implements IGuest{
    name : string;
    constructor (Name : string)
    {
        this.name = Name;
    }
}

export class Seats implements ISeats{
    x : number;
    y : number;
    guest : IGuest | undefined;
    type : TypeSeats;
    constructor (X : number, Y : number,Type : TypeSeats, Guest? : IGuest)
    {
       this.x = X;
       this.y = Y;
       this.guest = Guest;
       this.type = Type;
    }
}