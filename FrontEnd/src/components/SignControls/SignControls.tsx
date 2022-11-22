import React from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

export const SignControls: React.FC = () =>{
    const [IsRightActive, SetIsRightActive] = React.useState(true);
    const [ClassName, SetClassName] = React.useState("container");

    const toggleContainerClick = () => {
        SetIsRightActive(!IsRightActive);
        if (IsRightActive)
            SetClassName("container right-panel-active");
        else
            SetClassName("container");
      };
    return (
        <div className={ClassName} id="container">
            <SignUp/>
            <SignIn/>
            <div className="overlay-container">
                <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Здравствуйте!</h1>
                    <p>У вас уже есть аккаунт?</p>
                    <button className="ghost" id="signIn" onClick={toggleContainerClick}>Войти</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>C возвращением!</h1>
                    <p>У вас нет аккаунта?</p>
                    <button className="ghost" id="signUp" onClick={toggleContainerClick}>Зарегистрироваться</button>
                </div>
                </div>
            </div>
        </div>
    );
}