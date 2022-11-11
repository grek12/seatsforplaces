import React from 'react';
import "./Number.scss"

interface IProps{
    Col? : number;
    Row? : number;
    Size : number;
    left? : number;
    top? : number;
}

export const Number: React.FC<IProps> = ({Col, Row, Size, left = 0, top = 0}) => {

    return (
        <div className="RowCols" style={{
            width : Size,
            height: Size,
            left: left,
            top: top,
            position : 'absolute',
        }}>
            <span className='RowCol'>
                { !Col ? Row : Col}
            </span>
        </div>
    );    
}