import React from 'react';
import List from 'antd/lib/list';
import "./Seating.scss"
import { ETypeSeats, IPlace } from '../../Entity/Interfaces/Interfaces';
import SeatingSeat from '../SeatingSeat';
import { BaseURL } from '../../Entity/Constants/Constants';
import { useNavigate } from 'react-router-dom';

interface IProps{
	ElementSize? : number;
	Padding : number;
	Places : IPlace;
	prevStep() : void;
}

export const Seating: React.FC<IProps> = ({Places, ElementSize = 55, Padding, prevStep}) => {
	const navigation = useNavigate();

	const CreateMeeting = async () => {
		const response = await fetch(BaseURL.concat("/api/test/user/testcreateevent"), {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem("Token")},
			body: JSON.stringify({
				address : "Kazan",
				datetime : Places.datetime,
				nameevent : Places.placeName,
				columns : Places.columns,
				rows : Places.rows,
				seats : Places.array,
				guests: Places.guest, 
			}),
		})
		if (response.ok === true) {
			const data = await response.json()
			navigation("/Room/" + data);
		} else {
			const errorData = await response.json();
			console.log("errors", errorData);
			alert("Что-то пошло не так")
		}
	}

	for (let i = 0; i < Places.array.length; i++) {
		for (let j = 0; j < Places.array[i].length; j++) {
			if (j == 0){
				if (Places.array[i][j].type == ETypeSeats.Passage)
					Places.array[i][j].x = -1;
				else
					Places.array[i][j].x = 1;
			}else if (Places.array[i][j].type == ETypeSeats.Passage){
				if (Places.array[i][j-1].x < 0)
					Places.array[i][j].x = Places.array[i][j - 1].x;
				else
					Places.array[i][j].x = -(Places.array[i][j-1].x + 1);
			}else{
				if (Places.array[i][j-1].x < 0)
					Places.array[i][j].x = -(Places.array[i][j-1].x);
				else
					Places.array[i][j].x = Places.array[i][j-1].x + 1;
			}
		}    
	}
	
	let needIndex = false;

	for (let i = 0; i < Places.array.length; i++) {
		let countPassage = 0;
		for (let j = 0; j < Places.array[i].length; j++) {
			if (Places.array[i][j].type == ETypeSeats.Passage)
				countPassage++;
			if (i == 0){
					Places.array[i][j].y = 1;
			}else if(needIndex){
				Places.array[i][j].y = Places.array[i-1][j].y;
			}else{
				Places.array[i][j].y = Places.array[i-1][j].y + 1 ;
			}
		} 
		needIndex = countPassage == Places.array[i].length;   
	}

	return (
		<div className='Portal'>
			<button className='Changer-PrevButton' onClick={prevStep}>
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
			<button className='Changer-NextButton' onClick={CreateMeeting}>
				Создать?
			</button>
		</div> 
	);
}   