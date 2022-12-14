import React from 'react';
import { BaseURL } from '../../Entity/Constants/Constants';

export const SignIn: React.FC = () =>{
    const [Email, SetEmail] = React.useState("");
    const [Password, SetPassword] = React.useState("");

    const toSignIn = async() => {
        if (Email.length > 0 && Password.length > 0)
        {
            const response = await fetch(BaseURL.concat("/api/auth/signin"), {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({
                    email : Email,
                    password : Password,
                }),
            })
            if (response.ok === true) {
                const data = await response.json()
                localStorage.setItem("Token", data.accessToken);
                window.location.assign('http://localhost:4000/');
            } else {
                const errorData = await response.json();
                console.log("errors", errorData);
                alert("Неверный логин или пароль")
            }
        }
        else
            console.log("Ебанат?");
    }

    return (
        <div className="form-container sign-in-container">
            <div className='div-container'>
                <h1>Вход</h1>
                <input type="email" value={Email} placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetEmail(e.target.value)}/>
                <input type="password" value={Password} placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetPassword(e.target.value)}/>
                <button className='LogInButton' onClick={toSignIn} type="reset">Войти!</button>
            </div>
        </div>
    );
}