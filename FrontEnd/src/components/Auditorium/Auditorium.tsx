import React from 'react';
import { PortalPage } from '../../pages';
import Seat from '../Seat';
import "./Auditorium.scss"

interface IProps{
    Columns : number;
    Rows : number;
    Array : number[][];
}

export const Auditorium: React.FC<IProps> = ({Array, Columns, Rows}) => {
    const elementSize = 55;
    const offsetHeight = 400;
    const offsetWidth = 600;
    
    return (
        <PortalPage>
            <div className='container' style={{
                width : (Columns * elementSize) + offsetWidth,
                height : (Rows * elementSize) + offsetHeight,
            }}>
                <div className='Auditorium' style={{
                    width : Columns * elementSize,
                    height : Rows * elementSize,
                }}>
                    {Array.map((rows, i) =>
                        rows.map((col, k) => (
                            <Seat key={i+k} Value={Array[i][k]}/>
                        ))
                    )}
                </div>
            </div>
        </PortalPage>  
    );
}   