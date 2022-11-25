import React from "react";
import {
	Routes,
	Route
  } from "react-router-dom";
import { MainPage } from "../../pages";
import CreateMeetingPage from "../../pages/CreateMeetingPage";
import Layout from "../Layout";

interface IProps{
	id : number | string;
	idG : number | string;
}

const Qwe: React.FC<IProps> = ({id, idG}) => {
	return (<h1>{id}qqq{idG}</h1>)
}

export const App: React.FC = () => {
	const q = window.location.href.split("/").reverse()[0];
	console.log(q);
	return (
		<div>
			<Layout>
				<Routes>
					<Route path='/CreateMeeting' element={<CreateMeetingPage/>}/>
					<Route path='/CreateMeeting/:id/:idG' element={<Qwe id={5} idG={q}/>}/>
					{/* <Route path='/CreateMeeting/:id/:idG' element={<Qwe id={2} idG={1}/>}/> */}
					<Route path='/' element={<MainPage/>}/>
				</Routes>
			</Layout>
		</div>
	);
};