import React, { useState } from 'react';
import Room from '../../components/Room';
import { useParams } from "react-router-dom"
import { BaseURL } from '../../Entity/Constants/Constants';
import "./RoomPage.scss"
import { Place } from '../../Entity/Classes/Classes';


export const RoomPage: React.FC = () => {
	const [Places, SetPlaces] = useState<Place>();
	const {id} = useParams();
	
	React.useEffect(() => {
		const getRoom = async () => {
			console.log("/api/test/user/event/"+id);
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
		getRoom();
	}, [id])

	if (Places)
	return(
		<div className='PortalPage'>
			<div className='Portal'>
				<div className='MainPage-Row'>
					<div className='MainPage-Col'>
					<div className='MainPage-Col-RoomName'>
							<div>
								{Places.placeName}
							</div>
							<div>
								#{id}
							</div>
						</div>
						<Room Places={Places}  Padding={5}/>
					</div>
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
