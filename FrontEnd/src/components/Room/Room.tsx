import React, { useState } from 'react';
import List from 'antd/lib/list';
import "./Room.scss"
import { IPlace} from '../../Entity/Interfaces/Interfaces';
import SeatingSeat from '../SeatingSeat';

interface IProps{
	ElementSize? : number;
	Padding : number;
	Place : IPlace;
}

export const Room: React.FC<IProps> = ({Place ,ElementSize = 55, Padding}) => {
	const [Places] = useState(Place);

	return (
		<div className='Portal'>
			<button className='Changer-PrevButton'>
				Назад?
			</button>
			<div className='control'>
				<div className='Auditorium-Container'>
					<div className='HintS'>
						<div className='HintS-item'>
							<div className='Important'/>
							<div>Важный гость</div>
						</div>
						<div className='HintS-item'>
							<div className='Empty'/>
							<div>Проход</div>
						</div>
						<div className='HintS-item'>
							<div className='No'/>
							<div>Пустое место</div>
						</div>
					</div>
					<div className='Auditorium-marginAuto'>
						<div className='Numbers-flexRow'>
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
			<button className='Changer-NextButton'>
				Создать?
			</button>
		</div> 
	);
}   