import React from 'react';
import { PortalPage } from '../../pages';
import Seat from '../Seat';
import Number from '../Number';
import "./Auditorium.scss"

interface IProps{
    Columns : number;
    Rows : number;
    Array : number[][]
    elementSize? : number;
}

export const Auditorium: React.FC<IProps> = ({Array, Columns, Rows, elementSize = 55}) => {
    const Padding = 5;



    return (
        <PortalPage>
            <div className='control'>
                <div className='Auditorium-Container'>
                <div className='Auditorium-marginAuto'>
                    <div className='Numbers-Column' style={{
                        height : elementSize  + Padding,
                        width : (elementSize + Padding) * Columns,
                    }}>
                        {
                            Array.map((rows, i) => 
                            rows.map((col, k) => (
                                i == 0 ? <Number key={k+k} Col={k+1} Size={elementSize} left={(k+1) * (elementSize + Padding)}/> : null
                            ))
                        )} 
                    </div>
                    <div className='Numbers-flexRow'>
                        <div className='Numbers'>
                        {
                            Array.map((rows, i) => (
                                <Number key={i+i} Row={i + 1} Size={elementSize} top={(i) * (elementSize + Padding)}/>
                            )
                        )}    
                        </div>
                        <div className='Auditorium' style={{
                            width : Columns * (elementSize + Padding),
                            height : Rows * (elementSize + Padding),
                        }}>
                            {
                                Array.map((rows, i) =>
                                rows.map((col, k) => (
                                    <Seat key={i+k} Value={Array[i][k]} Col={i + 1} Row={k + 1} Size={elementSize} left={(k) * (elementSize + Padding)} top={(i) * (elementSize + Padding)}/>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </PortalPage>  
    );
}   