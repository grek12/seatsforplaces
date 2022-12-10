import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import { BaseURL } from '../../Entity/Constants/Constants';
import "./TakeSeatPage.scss"
import { Guest, Place } from '../../Entity/Classes/Classes';
import { TakeRoom } from '../../components';
import { Input } from 'antd';

export const TakeSeatPage: React.FC = () => {
	const [Places, SetPlaces] = useState<Place>();
	const [Cols, SetCols] = useState(-1);
	const [Rows, SetRows] = useState(-1);
	const [GuestName, SetGuestName] = useState("");
	const {id} = useParams();

	const onGuestNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        SetGuestName(e.target.value);
    };
	
	React.useEffect(() => {
		const getRoom = async () => {
			const response = await fetch(BaseURL.concat("/api/test/user/event/"+id), {
				method: "GET",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authorization": "Bearer " + localStorage.getItem("Token")},
			})
			if (response.ok === true) {
				const data = await response.json()
				console.log(data);
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

	const SetColsRows = (Row: number, Col : number) => {
		SetCols(Row - 1);
		SetRows(Col - 1);
	}

	const AddGuestToPlace = async () => {
			console.log(Cols,Rows);
			if (Places)
			{
				const g = new Guest(GuestName);
				Places.array[Cols][Rows].guest = g;
				Places.guest.push(g);
				console.log(Places);
			}
			const response = await fetch(BaseURL.concat("/api/test/user/updateeevent"), {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Authorization": "Bearer " + localStorage.getItem("Token")},
					body: JSON.stringify({
						id : id,
						address : "Kazan",
						datetime : Places?.datetime,
						nameevent : Places?.placeName,
						columns : Places?.columns,
						rows : Places?.rows,
						seats : Places?.array,
						guests: Places?.guest, 
					}),
			})
			if (response.ok === true) {
				const data = await response.json()
				console.log(data);
			} else {
				const errorData = await response.json();
				console.log("errors", errorData);
				alert("Что-то пошло не так")
			}
	}

	if (Places)
	return(
		<div className='PortalPage'>
			<div className='Portal'>
				<div className='MainPage-Row'>
					<div className='MainPage-Col'>
						<div className='MainPage-Col-RoomName margin-05rem-bottom'>
							<div>
								{Places.placeName}
							</div>
							<div>
								#{id}
							</div>
						</div>
						<div className='MainPage-Row-RoomName'>
							<div>
								Введите ФИО
							</div>
							<div>
								<Input showCount maxLength={40} value={GuestName} placeholder="ФИО" onChange={onGuestNameChange} className="margin-05rem-left"/> 
							</div>
						</div>
						<TakeRoom Places={Places}  Padding={5} AddGuestToSeat={SetColsRows}/>
					</div>
					<button hidden={!(GuestName.length > 10 && Cols != -1 && Rows != -1)} className="buttonHeight" onClick={AddGuestToPlace}>
						Занять место!
					</button>
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
