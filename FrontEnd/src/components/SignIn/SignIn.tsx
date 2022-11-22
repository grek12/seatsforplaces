import React from 'react';

export const SignIn: React.FC = () =>{
    return (
        <div className="form-container sign-in-container">
            <div className='div-container'>
                <h1>Вход</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className='LogInButton'>Войти!</button>
            </div>
        </div>
    );
}