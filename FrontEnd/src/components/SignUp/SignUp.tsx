import React from 'react';
import { BaseURL } from '../../Entity/Constants/Constants';

export const SignUp: React.FC = () =>{
    const [Email, SetEmail] = React.useState("");
    const [Password, SetPassword] = React.useState("");
    const [Name, SetName] = React.useState("");



    const toSignUp = async() => {
        if (Email.length > 0 && Password.length > 0 && Name.length > 0)
        {
            const response = await fetch(BaseURL.concat("/api/auth/signup"), {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({
                    name : Name,
                    email : Email,
                    password : Password,
                }),
            })
            if (response.ok === true) {
                const data = await response.json()
                console.log(data);
                alert("Регистрация прошла успешно");
            } else {
                const errorData = await response.json();
                console.log("errors", errorData);
                alert("Что-то пошло не так")
            }
        }
        else
            console.log("Ебанат?");
    }

    return (
        <div className="form-container sign-up-container">
            <div className='div-container'>
                <h1>Регистрация</h1>
                <input type="text" value={Name} placeholder="Name" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetName(e.target.value)}/>
                <input type="email" value={Email} placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetEmail(e.target.value)}/>
                <input type="password" value={Password} placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetPassword(e.target.value)}/>
                <button className='LogInButton' onClick={toSignUp}>Регистрация!</button>
            </div>
        </div>
    );
}