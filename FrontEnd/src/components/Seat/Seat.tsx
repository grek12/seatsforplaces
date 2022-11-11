import React from 'react';
import "./Seat.scss"

interface IProps{
    Value : number;
    Col : number;
    Row : number;
    Size : number;
    left? : number;
    top? : number;
}

export const Seat: React.FC<IProps> = ({Value, Col, Row, Size, left = 0, top = 0}) => {
    const [ClassName, SetClassName] = React.useState("Seat Place");
    const [Values, SetValue] = React.useState(Value);

    const toggleSeat = () => {
        SetValue((Values + 1) % 3);
        switch (Values)
        {
            case 0: SetClassName("Seat Place");
                break;
            case 1: SetClassName("Seat-important Place");
                break;
            default: SetClassName("Seat-empty Place")
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
        <div className={ClassName} onClick={toggleSeat} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} style={{
            width : Size,
            height: Size,
            left: left,
            top: top,
            position : 'absolute',
        }}>
            <span className='PlaceNumber'>
                {Col} , {Row}
            </span>
        </div>
    );    
}