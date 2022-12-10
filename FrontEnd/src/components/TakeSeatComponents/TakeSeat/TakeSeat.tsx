import React from 'react';
import { ETypeSeats, IGuest } from '../../../Entity/Interfaces/Interfaces';
import "./TakeSeat.scss"

interface IProps{
    Col : number;
    Row : number;
    Size : number;
    left? : number;
    top? : number;
    type? : ETypeSeats
    guest? : IGuest
    toggleType(Row : number, Col : number) : ETypeSeats;
}

export const TakeSeat: React.FC<IProps> = ({Col, Row, Size, left = 0, top = 0, type, guest, toggleType}) => {
    const [Type, SetType] = React.useState(type);

    React.useEffect(() => {
        SetType(type);
    }, [type]
    )

    const SetGuest = () => {
        SetType(toggleType(Row,Col));
    }

    if (Type == ETypeSeats.Free && guest == undefined){
        return (
            <div className="TakenSeat-Empty PlaceSeat" style={{
                width : Size,
                height: Size,
                left: left,
                top: top,
                position : 'absolute',
            }}>
                <span className='PlaceSeatNumber' onClick={SetGuest}>
                    <div>
                        {Col} Место
                    </div>
                    <div>
                        {Row} ряд
                    </div>
                </span>
            </div>);  
    }else if (Type == ETypeSeats.Passage){
        return (
        <div className="TakenSeat-pas PlaceSeat" style={{
            width : Size,
            height: Size,
            left: left,
            top: top,
            position : 'absolute',
        }}>
            <span className='PlaceSeatNumber'>
                    <div>
                    </div>
                </span>
        </div>);
    }else if (Type == ETypeSeats.Current){
        return (
        <div className="TakenSeat-current PlaceSeat" style={{
            width : Size,
            height: Size,
            left: left,
            top: top,
            position : 'absolute',
        }}>
            <span className='PlaceSeatNumber'>
                    <div>
                        {Col} Место
                    </div>
                    <div>
                        {Row} ряд
                    </div>
                </span>
        </div>);
    }else{
        return (
            <div className="TakenSeat-Taken PlaceSeat" style={{
                width : Size,
                height: Size,
                left: left,
                top: top,
                position : 'absolute',
            }}>
                <span className='PlaceSeatNumber'>
                        <div>
                            {Col} Место
                        </div>
                        <div>
                            {Row} ряд
                        </div>
                    </span>
            </div>);  
    }

}