import React from 'react';
import Panel from '../../components/Panel';
import { Place } from '../../Entity/Classes/Classes';
import { BaseURL } from '../../Entity/Constants/Constants';
import "./AllMeetingsPage.scss"



export const AllMeetingsPage: React.FC = () => {
    const [Places, SetPlaces] = React.useState(new Array<Place>)
    const getMeetings = async () => {
		const response = await fetch(BaseURL.concat("/api/test/user/events"), {
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem("Token")},
		})
		if (response.ok === true) {
			const data = await response.json();
            const m = new Array<Place>();
            for (let i = 0; i < data.length; i++)
            {
			    const p = new Place(data[i].seats, data[i].rows, data[i].columns, data[i].guests, data[i].nameevent, data[i].id, data[i].datetime);
                m.push(p);
            }
            SetPlaces(m);
            console.log(m);
		} else {
			const errorData = await response.json();
			console.log("errors", errorData);
			alert("Что-то пошло не так")
		}
	}

    if (Places.length == 0)
        getMeetings();

    return(
        <div className='PortalPage'>
            <div className='Portal'>
                <div className='MainPage-Col'>
                {
                    Places.map((place) =>
                        <Panel key={place.id ? place.id : 0} placeName={place.placeName} id={place.id} datetime={place.datetime?? "2022-12-20 12:12"}/>   
                    )
                }
                </div>
            </div>
        </div>
    );
}
