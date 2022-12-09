import React from 'react';
import "./Panel.scss"

interface IProps{
    placeName : string;
    id : number | undefined;
    datetime : string;
}

export const Panel: React.FC<IProps> = ({placeName, id, datetime}) => {
        const Udatetime = datetime.split(" ");
        const date = Udatetime[0].split("-");
        const day = date[2];
        const month = date[1];
        const year = date[0];

        const time = Udatetime[1].split(":");
        const hour = time[0];
        const min = time[1];
        return (
            <div className='Meeting-flex'>
                <button placeholder='Занять место!' className='button-Absolute'>
                    Занять место!
                </button>
                <div className="MeetingContainer" style={{
                }}>
                    <div className='Meeting-flex-Row'>
                        <div>
                            {placeName} #{id}
                        </div>
                        <div className='MeetingDateTime'>
                            Дата проведения: {day}-{month}-{year} Время: {hour}:{min}
                        </div>
                    </div>
                </div>
            </div>

        );    
}
