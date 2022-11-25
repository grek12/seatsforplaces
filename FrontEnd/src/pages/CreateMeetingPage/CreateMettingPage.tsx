import React, { useState } from 'react';
import { Changer } from '../../components';
import { Auditorium } from '../../components';
import "./CreateMeetingPage.scss"
import { Place } from '../../Entity/Classes/Classes';
import { Steps } from 'antd';
import { IGuest, ISeats } from '../../Entity/Interfaces/Interfaces';
import Seating from '../../components/Seating';
const { Step } = Steps;



export const CreateMeetingPage: React.FC = () => {
	const [Places] = useState<Place>(new Place(new Array<ISeats[]>, 0, 0, new Array<IGuest>, ""));
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
								<Step title="Компоновка"/>
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
			return (
				<div className='PortalPage'>
				<div className='Portal'>
					<div className='MainPage-Col'>
						<Seating Places={Places}  Padding={5} nextStep={() => SetCurrentStep(CurrentStep + 1)}
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
			);
	}
}
