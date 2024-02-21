// https://http.cat/ útil para saber os códigos

import userModel from '../models/user.js';
import {
	authenticate as authService,
	isAuthenticated as tokenCheck,
} from '../services/auth.js';

const authenticate = async (request, response) => {
	try {
		const user = userModel(request.body);
		const { accessToken, refreshToken } = await authService(user);

		response.cookie('accessToken', accessToken, { maxAge: 60000 });
		response.cookie('refreshToken', refreshToken, {
			maxAge: 300000,
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
		});

		return response.status(200).json({ login: true });
	} catch (error) {
		console.log(error);
		return response
			.status(error.status || 500)
			.json({ message: error.message || 'Internal Error' });
	}
};

const isAuthenticated = async (request, response) => {
	try {
		const headerToken = request.headers['authorization'];
		if (!headerToken) return response.json('É preciso de um token de acesso!');
		const token = await tokenCheck(headerToken);
		return response.status(200).json({ login: true, token });
	} catch (error) {
		return response
			.status(error.status || 500)
			.json({ message: error.message || 'Internal Error' });
	}
};

export { authenticate, isAuthenticated };
