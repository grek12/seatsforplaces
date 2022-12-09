import { Input, InputNumber, Button, List } from 'antd';
import React, { useState } from 'react';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { IPlace, ISeats, ETypeSeats} from '../../Entity/Interfaces/Interfaces';
import { DatePicker, TimePicker } from 'antd';
import "./Changer.scss"
import { Guest, Seats } from '../../Entity/Classes/Classes';


interface IProps{
    PlaceName? : string;
    Places : IPlace;
    nextStep() : void;
}

export const Changer: React.FC<IProps> = ({Places, nextStep}) => {
    let CurrentGuest = new Guest("");
    const [Guests, SetGuests] = useState<Guest[]>(Places.guest);
    const [Date, SetDate] = useState("2012-12-12");
    const [Time, SetTime] = useState("20:20");
    const AddGuest = () => {
        if (CurrentGuest)
        {
            SetGuests(Guests => [...Guests, CurrentGuest])
            Places.guest.push(CurrentGuest);
            CurrentGuest = new Guest("");
        }
    }

    const onChangeTime: TimePickerProps['onChange'] = (time, timeString) => {
        SetTime(timeString);
        Places.datetime = Date.concat(" ", Time);
      };

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        SetDate(dateString);
      };

    const onPlaceNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        Places.placeName = e.target.value;
    };

    const onGuestNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        CurrentGuest.name = e.target.value;
    };

    const NextStep = () => {
        let i = 0;
        Places.array = new Array<ISeats[]>;
        while (i < Places.rows)
        {
            let j = 0;
            const arr = new Array<ISeats>;
            while (j < Places.columns)
            {
                arr.push(new Seats(j,i, ETypeSeats.Free));
                j++;
            }
            Places.array.push(arr);
            i++;
        }
        nextStep();
    }

    return (
            <div className='Portal'>
                <div className='Changer'>
                    <div className='Changer-Container'>
                        <div className='Changer-InputGroup'>
                            <div className='Changer-Text'>Введите название мероприятия</div>
                            <Input className='Changer-margin' showCount maxLength={20} placeholder="Название" onChange={onPlaceNameChange}/>
                            <div className='Changer-Text Changer-margin'>Дата проведения</div>
                            <div className='Changer-InputGroup-Row'>
                                <DatePicker onChange={onChangeDate} placeholder="Дата"/>
                                <TimePicker onChange={onChangeTime} placeholder="Время"/>
                            </div>
                            <div className='Changer-InputGroup Changer-width'>
                                <div className='Changer-InputGroup-Row'>
                                    <div className='Changer-Text'>
                                        Кол-во рядов
                                    </div>
                                    <InputNumber min={1} max={100} defaultValue={Places.rows} onChange={value => Places.rows = value ?? 1}/>
                                </div>
                                <div className='Changer-InputGroup-Row'>
                                    <div className='Changer-Text'>
                                        Кол-во мест в ряду
                                    </div>
                                    <InputNumber min={1} max={100} defaultValue={Places.columns} onChange={value => Places.columns = value ?? 1}/>
                                </div>
                            </div>
                            <div className='Changer-Text'>Добавьте гостей!</div>
                            <div className='Changer-InputGroup-Row'>
                                <Input showCount maxLength={40} placeholder="ФИО" onChange={onGuestNameChange}/> 
                                <Button onClick={AddGuest}>Добавить!</Button>
                            </div>
                        </div>
                    </div>
                    <div className='Changer-ListGuest'>
                        <div className='Changer-Text Changer-margin'>Список гостей</div>
                        <List size='large' dataSource={Guests}
                            renderItem={g => <List.Item>{g.name}</List.Item>}/>
                    </div>
                </div>
                <button className='Changer-NextButton' onClick={NextStep}>
                    Далее?
                </button>
            </div>
    );    
}