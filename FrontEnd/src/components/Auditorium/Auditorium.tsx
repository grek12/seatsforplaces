import React from 'react';
import Seat from '../Seat';
import Number from '../Number';
import List from 'antd/lib/list';
import "./Auditorium.scss"
import { IPlace, TypeSeats } from '../../Entity/Interfaces/Interfaces';

interface IProps{
    ElementSize? : number;
    Padding : number;
    Places : IPlace;
    prevStep() : void;
    nextStep() : void;
}

export const Auditorium: React.FC<IProps> = ({Places, ElementSize = 55, Padding, prevStep, nextStep}) => {
    const [currentColor, SetCurrentColor] = React.useState<TypeSeats>(TypeSeats.Free);

    const toggleSeatsColor = (Col : number, Row: number) => {
        Places.array[Row][Col].type = currentColor;
        return (currentColor);
    }

    return (
        <div className='Portal'>
            <button className='Changer-PrevButton' onClick={prevStep}>
                Назад?
            </button>
            <div className='control'>
                <div className='Auditorium-Container'>
                    <div className='Hint'>
                        <div className='Hint-item' onClick={() => SetCurrentColor(TypeSeats.Important)}>
                            <div className='Important'/>
                            <div>Важный гость</div>
                        </div>
                        <div className='Hint-item' onClick={() => SetCurrentColor(TypeSeats.Passage)}>
                            <div className='Empty'/>
                            <div>Проход</div>
                        </div>
                        <div className='Hint-item' onClick={() => SetCurrentColor(TypeSeats.Free)}>
                            <div className='No'/>
                            <div>Пустое место</div>
                        </div>
                    </div>
                    <div className='Auditorium-marginAuto'>
                        <div className='Numbers-Column' style={{
                            height : ElementSize  + Padding,
                            width : (ElementSize + Padding) * Places.rows,
                        }}>
                            {
                                Places.array.map((rows, i) => 
                                rows.map((col, k) => (
                                    i == 0 ? <Number key={k+k} Col={k+1} Size={ElementSize} left={(k+1) * (ElementSize + Padding)}/> : null
                                ))
                            )} 
                        </div>
                        <div className='Numbers-flexRow'>
                            <div className='Numbers'>
                            {
                                Places.array.map((rows, i) => (
                                    <Number key={i+i} Row={i + 1} Size={ElementSize} top={(i) * (ElementSize + Padding)}/>
                                )
                            )}    
                            </div>
                            <div className='Auditorium' style={{
                                width : Places.columns * (ElementSize + Padding),
                                height : Places.rows * (ElementSize + Padding),
                            }}>
                                {
                                    Places.array.map((rows, i) =>
                                    rows.map((col, k) => (
                                        <Seat key={i+k} Col={i} Row={k} Size={ElementSize} left={(k) * (ElementSize + Padding)}
                                         top={(i) * (ElementSize + Padding)} type={Places.array[i][k].type} toggleType={toggleSeatsColor}/>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='Changer-ListGuest'>
                        <div className='Changer-Text Changer-margin'>Список гостей</div>
                        <List size='large' dataSource={Places.guest}
                            renderItem={g => <List.Item>{g.name}</List.Item>}/>
                </div>
            <button className='Changer-NextButton' onClick={nextStep}>
                Далее?
            </button>
        </div> 
    );
}   