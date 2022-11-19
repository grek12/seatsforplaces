import React, { useState } from 'react';
import { Changer } from '../../components';
import { Auditorium } from '../../components';
import "./CreateMeetingPage.scss"
import { Place } from '../../Entity/Classes/Classes';
import { Steps } from 'antd';
import { IGuest } from '../../Entity/Interfaces/Interfaces';
const { Step } = Steps;



export const CreateMeetingPage: React.FC = () => {
	const [Places] = useState<Place>(new Place(new Array<number[]>, 0, 0, new Array<IGuest>, ""));
	const [CurrentStep, SetCurrentStep] = useState(0);


	switch (CurrentStep)
	{
		case 0:
		return(
		<div className='PortalPage'>
			<div className='Portal'>
				<div className='MainPage-Col'>
					<Changer Places={Places} nextStep={() => SetCurrentStep(CurrentStep + 1)}/>
					<div className="MainPage-Steps">
						<Steps current={CurrentStep} className="MainPage-Stepper">
							<Step title="Создание"/>
							<Step title="Компановка"/>
							<Step title="Рассадка"/>
						</Steps>
					</div>
				</div>
			</div>
		</div>
		)
		case 1:
		return(
		<div className='PortalPage'>
			<div className='Portal'>
				<div className='MainPage-Col'>
					<Auditorium Places={Places}  Padding={5} nextStep={() => SetCurrentStep(CurrentStep + 1)}
						prevStep={() => SetCurrentStep(CurrentStep - 1)}/>
					<div className="MainPage-Steps">
						<Steps current={CurrentStep} className="MainPage-Stepper">
							<Step title="Создание"/>
							<Step title="Компоновка"/>
							<Step title="Рассадка"/>
						</Steps>
					</div>
				</div>
			</div>
		</div>
		)
		default:
			return null;
	}
}
