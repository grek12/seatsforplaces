import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import "./Header.scss";


export const Header: React.FC = () => {
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
            <Link className="Header-Menu-Item" to='./'>
            Войти/Регистрация
            </Link>
        </div>
    </header>
  );
};
