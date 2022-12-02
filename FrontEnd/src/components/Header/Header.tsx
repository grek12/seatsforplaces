import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import "./Header.scss";

export const Header: React.FC = () => {

	const CheckAuth = () => {
		if (localStorage.getItem("Token") != undefined)
			return true;
		return false;
	}

	const LogOut = () => {
		localStorage.removeItem("Token");
		SetIsAuth(false);
	}

	const [IsAuth, SetIsAuth] = React.useState(CheckAuth());


	if (IsAuth == false)
	{
		return (
			<header className="Header">
					<NavLink className="Header-Logo" tag={Link} to='./'>
							Seats For Places
					</NavLink>
					<div className="Header-Menu">
							<Link className="Header-Menu-Item" to='/CreateMeeting'>
							Просмотр мероприятий
							</Link>
							<Link className="Header-Menu-Item" to='/CreateMeeting'>
							Создать мероприятие
							</Link>
							<Link className="Header-Menu-Item" to='./Sign'>
							Авторизация
							</Link>
					</div>
			</header>
		);
	}else{
		return (
			<header className="Header">
					<NavLink className="Header-Logo" tag={Link} to='./'>
							Seats For Places
					</NavLink>
					<div className="Header-Menu">
							<Link className="Header-Menu-Item" to='/CreateMeeting'>
							Просмотр мероприятий
							</Link>
							<Link className="Header-Menu-Item" to='/CreateMeeting'>
							Создать мероприятие
							</Link>
							<Link className="Header-Menu-Item" onClick={LogOut} to='/Sign'>
							Выйти из аккаунта
							</Link>
					</div>
			</header>
		);
	}
};