import React from 'react';
import { ETypeSeats } from '../../Entity/Interfaces/Interfaces';
import "./Seat.scss"

interface IProps{
    Col : number;
    Row : number;
    Size : number;
    left? : number;
    top? : number;
    type: ETypeSeats;
    toggleType(Row : number, Col : number) : ETypeSeats;
}

export const Seat: React.FC<IProps> = ({Col, Row, Size, left = 0, top = 0, type, toggleType}) => {
    const [Type, SetType] = React.useState(type);

    React.useEffect(() => {
        SetType(type);
    }, [type]
    )

    const toggleColor = () => {
        SetType(toggleType(Row, Col));
    }

    if (Type == ETypeSeats.Free){
        return (
            <div className="Seat Place" onClick={toggleColor} style={{
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
    }else if (Type == ETypeSeats.Important){
    return (
        <div className="Seat-important Place" onClick={toggleColor} style={{
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
    }else{
    return (
        <div className="Seat-empty Place" onClick={toggleColor} style={{
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

}