import React from 'react';
import "./Seat.scss"

interface IProps{
    Value : number;
    Col : number;
    Row : number;
}

export const Seat: React.FC<IProps> = ({Value, Col, Row}) => {
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
            case 2: SetClassName("Seat-empty");
            default:
                break;
        }   
        Value = Values;
    }

    const handleMouseIn = () => {
        return;
    }

    const handleMouseOut = () => {
        return;
    }

    return (
        <div className={ClassName} onClick={toggleSeat} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            {Col}, {Row}
        </div>
    );    
}