import React from 'react';
import { ETypeSeats } from '../../Entity/Interfaces/Interfaces';
import "./SeatingSeat.scss"

interface IProps{
    Col : number;
    Row : number;
    Size : number;
    left? : number;
    top? : number;
    type: ETypeSeats;
}

export const SeatingSeat: React.FC<IProps> = ({Col, Row, Size, left = 0, top = 0, type}) => {

    if (type == ETypeSeats.Free){
        return (
            <div className="SeatingSeat PlaceSeat" style={{
                width : Size,
                height: Size,
                left: left,
                top: top,
                position : 'absolute',
            }}>
                <span className='PlaceSeatNumber'>
                    {Col} место , {Row} ряд
                </span>
            </div>
        );  
    }else if (type == ETypeSeats.Important){
    return (
        <div className="SeatingSeat-important Place" style={{
            width : Size,
            height: Size,
            left: left,
            top: top,
            position : 'absolute',
        }}>
            <span className='PlaceSeatNumber'>
                {Col} место , {Row} ряд
            </span>
        </div>
    );
    }else{
    return (
        <div className="SeatingSeat-empty Place" style={{
            width : Size,
            height: Size,
            left: left,
            top: top,
            position : 'absolute',
        }}>
            <span className='PlaceSeatNumber'>
            </span>
        </div>
    );  
    }

}