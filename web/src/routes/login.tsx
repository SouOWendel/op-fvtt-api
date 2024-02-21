import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface login {
	username?: string;
	password?: string;
}

export default function Login() {
	const [login, setLogin] = useState<login>({});
	const navigate = useNavigate();

	axios.defaults.withCredentials = true;
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		axios
			.post('http://localhost:3000/login/auth', login)
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.token);
				navigate('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h1>login</h1>
			<form onSubmit={handleSubmit}>
				Nome:{' '}
				<input
					type=""
					placeholder="Insira o nome de usuário"
					onChange={(e) => setLogin({ ...login, username: e.target.value })}
				/>
				Senha:{' '}
				<input
					type=""
					placeholder="Insira a sua senha"
					onChange={(e) => setLogin({ ...login, password: e.target.value })}
				/>
				<button type="submit">Logar</button>
			</form>
		</div>
	);
}
