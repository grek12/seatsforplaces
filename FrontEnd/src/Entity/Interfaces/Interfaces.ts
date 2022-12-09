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
    type : ETypeSeats;
}


export interface IUser{
    id?: number;
    name: string;
    email : string;
    password : string;
    creationnum? : number;
    Role? : IRole;

}

export interface IRole{
    id?: number;
    name : ERole;
}

export enum ETypeSeats{
    Important = "Important",
    Free = "Free",
    Passage = "Passage",
}

export enum ERole{
    ROLE_USER,
    ROLE_ADMIN,
}