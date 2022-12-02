import React, { useState } from 'react';
import Room from '../../components/Room';
import { BaseURL } from '../../Entity/Constants/Constants';
import "./RoomPage.scss"
import { Place } from '../../Entity/Classes/Classes';

interface IProps{
	id: string;
}


export const RoomPage: React.FC<IProps> = ({id}) => {
	const [Places, SetPlaces] = useState<Place>();

	const getRoom = async () => {
		if (!Places){
			const response = await fetch(BaseURL.concat("/api/test/user/event/"+id), {
				method: "GET",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authorization": "Bearer " + localStorage.getItem("Token")},
			})
			if (response.ok === true) {
				const data = await response.json()
				const p = new Place(data.seats, data.rows, data.columns, data.guests, data.nameevent);
				SetPlaces(p);
			} else {
				const errorData = await response.json();
				console.log("errors", errorData);
				alert("Что-то пошло не так")
			}
		}
	}

	getRoom();
	
	if (Places)
	return(
		<div className='PortalPage'>
			<div className='Portal'>
				<div className='MainPage-Col'>
					<Room Place	={Places}  Padding={5}/>
				</div>
			</div>
		</div>
	);
	else
	return(
		<div className='PortalPage'>
			<div className='Portal'>
				<div className='MainPage-Col'>
				</div>
			</div>
		</div>
	);
}
