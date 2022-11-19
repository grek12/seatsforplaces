export interface IPlace{
    columns : number;
    rows : number;
    array : number[][];
    guest : IGuest[];
    placeName : string;
}

export interface IGuest{
    name : string;
}