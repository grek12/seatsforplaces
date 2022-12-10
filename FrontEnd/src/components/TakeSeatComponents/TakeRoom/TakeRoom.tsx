import React from 'react';
import List from 'antd/lib/list';
import "./TakeRoom.scss"
import TakeSeat from '../TakeSeat';
import { ETypeSeats, IPlace } from '../../../Entity/Interfaces/Interfaces';

interface IProps{
	ElementSize? : number;
	Padding : number;
	Places : IPlace;
	AddGuestToSeat(Col : number,Row : number) : void;
}

export const TakeRoom: React.FC<IProps> = ({Places ,ElementSize = 55, Padding, AddGuestToSeat}) => {
	const [IsColorAvaible, SetIsColorAvaible] = React.useState(true);
	const toggleSeatsColor = (Col : number, Row: number) => {
		if (IsColorAvaible){
		AddGuestToSeat(Col,Row);
		SetIsColorAvaible(false);
        return (ETypeSeats.Current);
		}else{
			return (Places.array[Col-1][Row-1].type)
		}
    }

	return (
		<div className='Portal'>
			<div className='control'>
				<div className='Room-Container'>
					<div className='HintS'>
						<div className='HintS-item'>
							<div className='Taken'/>
							<div>Занято</div>
						</div>
						<div className='HintS-item'>
							<div className='No'/>
							<div>Cвободно</div>
						</div>
					</div>
					<div className='Room-marginAuto'>
						<div className='Numbers-flexRow'>
							<div className='Room' style={{
								width : Places.columns * (ElementSize + Padding),
								height : Places.rows * (ElementSize + Padding),
							}}>
								{
									Places.array.map((rows, i) =>
									rows.map((col, k) => (
										<TakeSeat key={i+k} Col={Places.array[i][k].x} Row={Places.array[i][k].y} Size={ElementSize} left={(k) * (ElementSize + Padding)}
										 top={(i) * (ElementSize + Padding)} type={Places.array[i][k].type} guest={Places.array[i][k].guest} toggleType={toggleSeatsColor}/>
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
		</div> 
	);
}   