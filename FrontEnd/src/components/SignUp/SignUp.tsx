import React from 'react';

export const SignUp: React.FC = () =>{
    return (
        <div className="form-container sign-up-container">
            <div className='div-container'>
                <h1>Регистрация</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className='LogInButton'>Регистрация!</button>
            </div>
        </div>
    );
}