import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../helpers/simpleAuth';

export default function Login() {

    const [user, setUser] = useState()
    const history = useHistory()

    const handleInputChange = evt => {
        setUser({
            ...user,
            [evt.target.id]: evt.target.value
        })
    }

	const handleLogin = (evt) => {
		evt.preventDefault();

		// create object based on state
		const credentials = {
			username: user.userName,
			password: user.password
		};

		console.log('login_user', credentials);
		// Make fetch call with the object as the body of the POST request
		login(credentials).then(history.push('/'));
	};
	return (
		<main style={{ textAlign: 'center' }}>
			<form className="form--login" onSubmit={handleLogin}>
				<h1 className="h3 mb-3 font-weight-normal">Login to Bangazon</h1>
				<fieldset>
					<label htmlFor="userName"> Username </label>
					<input
						onChange={(evt) => handleInputChange(evt)}
						id="userName"
						type="text"
						name="userName"
						className="form-control"
						placeholder="Username"
						required
						autoFocus
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="inputPassword"> Password </label>
					<input
						onChange={handleInputChange}
						id="password"
						type="password"
						name="password"
						className="form-control"
						placeholder="Password"
						required
					/>
				</fieldset>
				<fieldset>
					<button type="submit">Login</button>
				</fieldset>
			</form>
		</main>
	);
}
