export interface IPlace{
    columns : number;
    rows : number;
    array : ISeats[][];
    guest : IGuest[];
    placeName : string;
}

export interface IGuest{
    name : string;
}

export interface ISeats{
    x: number;
    y: number;
    guest: IGuest | undefined;
    type : TypeSeats;
}

export enum TypeSeats{
    Important,
    Free,
    Passage,
}