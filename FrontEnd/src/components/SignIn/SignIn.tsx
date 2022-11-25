import React from 'react';

export const SignIn: React.FC = () =>{
    const [Email, SetEmail] = React.useState("");
    const [Password, SetPassword] = React.useState("");


    const LogIn = () => {
        return null;
    }
    return (
        <div className="form-container sign-in-container">
            <div className='div-container'>
                <h1>Вход</h1>
                <input type="email" value={Email} placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetEmail(e.target.value)}/>
                <input type="password" value={Password} placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetPassword(e.target.value)}/>
                <button className='LogInButton' onClick={LogIn}>Войти!</button>
            </div>
        </div>
    );
}