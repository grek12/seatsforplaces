import React from 'react';
import Number from '../Number';
import List from 'antd/lib/list';
import "./Seating.scss"
import { ETypeSeats, IPlace } from '../../Entity/Interfaces/Interfaces';
import SeatingSeat from '../SeatingSeat';

interface IProps{
    ElementSize? : number;
    Padding : number;
    Places : IPlace;
    prevStep() : void;
    nextStep() : void;
}

export const Seating: React.FC<IProps> = ({Places, ElementSize = 55, Padding, prevStep, nextStep}) => {
    
    for (let i = 0; i < Places.array.length; i++) {
        for (let j = 0; j < Places.array[i].length; j++) {
            if (j == 0 && Places.array[i][j].type == ETypeSeats.Passage)
                Places.array[i][j].x = -(j+1);
            else if (j == 0 && Places.array[i][j].type != ETypeSeats.Passage)
                Places.array[i][j].x = j+1;
            else if (Places.array[i][j - 1].x < 0){
                if (Places.array[i][j].type == ETypeSeats.Passage){
                    Places.array[i][j].x = Places.array[i][j-1].x; 
                }
                else{
                    Places.array[i][j].x = -(Places.array[i][j-1].x); 
                }
            }
            else if (Places.array[i][j - 1].x > 0){
                Places.array[i][j].x = Places.array[i][j-1].x + 1;
            }
        }    
    }

    return (
        <div className='Portal'>
            <button className='Changer-PrevButton' onClick={prevStep}>
                Назад?
            </button>
            <div className='control'>
                <div className='Auditorium-Container'>
                    <div className='Hint'>
                        <div className='Hint-item'>
                            <div className='Important'/>
                            <div>Важный гость</div>
                        </div>
                        <div className='Hint-item'>
                            <div className='Empty'/>
                            <div>Проход</div>
                        </div>
                        <div className='Hint-item'>
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
                                        <SeatingSeat key={i+k} Col={Places.array[i][k].x} Row={Places.array[i][k].y} Size={ElementSize} left={(k) * (ElementSize + Padding)}
                                         top={(i) * (ElementSize + Padding)} type={Places.array[i][k].type}/>
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