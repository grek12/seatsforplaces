import React from 'react';
import Auditorium from '../../components/Auditorium';
import "./CreateMeetingPage.scss"

export const CreateMeetingPage: React.FC = () => {
	let array: number[][];
	// eslint-disable-next-line prefer-const
	array = [
		[1,1,2,1,1],
		[1,0,0,1,1],
		[1,0,0,1,1],
		[1,2,2,2,1],
	]
	return(
	<div className='MainPage'>
		<div>
		<Auditorium Array={array} Columns={5} Rows={4}/>
		</div>
	</div>
	)
}
