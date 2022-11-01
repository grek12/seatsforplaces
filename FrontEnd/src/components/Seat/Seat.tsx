import React from 'react';
import "./Seat.scss"

interface IProps{
    Value : number;
}

export const Seat: React.FC<IProps> = ({Value}) => {
    const [ClassName, SetClassName] = React.useState("Seat");
    const [Values, SetValue] = React.useState(Value);

    const toggleSeat = () => {
        SetValue((Values + 1) % 3);
        switch (Values)
        {
            case 0: SetClassName("Seat");
                break;
            case 1: SetClassName("Seat-important");
                break;
            case 2: SetClassName("Seat-taken");
            default:
                break;
        }   
        Value = Values;
    }

    return (
        <div className={ClassName} onClick={toggleSeat}/>
    );    
}