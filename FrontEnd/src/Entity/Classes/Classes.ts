import { IGuest, IPlace } from "../Interfaces/Interfaces";

export class Place implements IPlace{
    columns : number;
    rows : number;
    array : number[][];
    guest : IGuest[];
    placeName : string;
    constructor (Array : number[][], Rows : number, Columns : number,
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
