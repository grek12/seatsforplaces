import React from 'react';
import "../styles/LoginPage.css"
const LoginPage = () => (
	<div className='Login_body'>
		<div className="main">  	
			<input type="checkbox" id="chk" aria-hidden="true"/>
				<div className="signup">
					<form>
						<label htmlFor="chk" aria-hidden="true" className='Login_label'>Регистрация</label>
						<input type="text" name="txt" placeholder="Имя пользователя" className='Login_input'/>
						<input type="email" name="email" placeholder="Номер телефона" className='Login_input'/>
						<input type="password" name="pswd" placeholder="Пароль" className='Login_input'/>
						<button className='Login_button'>Зарегистрироваться</button>
					</form>
				</div>

				<div className="login">
					<form>
						<label htmlFor="chk" aria-hidden="true" className='Login_label'>Вход</label>
						<input type="phone" name="phone" pattern="[0-9]{3}\-[0-9]{3}" placeholder="Номер телефона" className='Login_input'/>
						<input type="password" name="pswd" placeholder="Пароль" className='Login_input'/>
						<button className='Login_button'>Войти</button>
					</form>
				</div>
		</div>
	</div>
)

export default LoginPage;