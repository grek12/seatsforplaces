import React from "react";
import {
	Routes,
	Route
  } from "react-router-dom";
import { CreateMeetingPage, LogInPage, MainPage, RoomPage  } from "../../pages";
import AllMeetingsPage from "../../pages/AllMeetingsPage";
import Layout from "../Layout";

// interface IProps{
// 	id : number | string;
// 	idG : number | string;
// }

// const Qwe: React.FC<IProps> = ({id, idG}) => {
// 	return (<h1>{id}qqq{idG}</h1>)
// }

export const App: React.FC = () => {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path='/CreateMeeting' element={<CreateMeetingPage/>}/>
					{/* <Route path='/CreateMeeting/:id/:idG' element={<Qwe id={5} idG={q}/>}/> */}
					<Route path='/Sign' element={ <LogInPage/>}/>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/Room/:id' element={<RoomPage/>}/>
					<Route path='/AllMeetings' element={<AllMeetingsPage/>}/>
				</Routes>
			</Layout>
		</div>
	);
};