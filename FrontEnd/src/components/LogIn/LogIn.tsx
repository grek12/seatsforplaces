import React from 'react';
import "./LogIn.scss"


export const LogIn: React.FC = () => {
    const ToSignInClick = () => {
        const container = document.getElementById("container");
        container?.classList.remove("right-panel-active");
        console.log('1');
      };
    const ToSignUpClick = () => {
        const container = document.getElementById("container");
        container?.classList.add("right-panel-active");
        console.log('2');
    };

    return(
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form>
          <h1>Sign Up</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='LogInButton'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='LogInButton'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={ToSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" id="signUp" onClick={ToSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    );
}