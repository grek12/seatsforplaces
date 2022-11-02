import React from 'react';
import "./Tooltip.scss"

interface IProps{
    Col : number;
    Row : number;
    ClassName : string;
    MouseIn : () => void;
    MouseOut : () => void;
}

export const Tooltip: React.FC<IProps> = ({Col, Row, ClassName}) => {
    return(
        <div className={ClassName}>
            {Col} ряд, {Row} место 
        </div>
    )
}