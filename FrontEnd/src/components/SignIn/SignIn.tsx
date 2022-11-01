import React from 'react';

export const SignIn: React.FC = () =>{
    return (
        <form>
            <div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Вход</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className='LogInButton'>Войти!</button>
                    </form>
                </div>
            </div>
        </form>
    );
}