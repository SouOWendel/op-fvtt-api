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
		return response
			.status(error.status || 500)
			.json({ message: error.message || 'Internal Error' });
	}
};

const isAuthenticated = async (request, response, next) => {
	try {
		const accessToken = request.cookies.accessToken;
		if (!accessToken && renewToken(request, response)) next();
		else {
			const decodedUsername = tokenCheck(accessToken, 'access');
			request.username = decodedUsername;
			next();
		}
		return response.status(200).json({ login: true });
	} catch (error) {
		return response
			.status(error.status || 500)
			.json({ message: error.message || 'Internal Error' });
	}
};

const renewToken = async (request, response) => {
	const refreshToken = request.cookies.refreshToken;
	let exist = false;
	if (!refreshToken) {
		return res.json({ valid: false, message: 'No Refresh token' });
	} else {
		if (tokenCheck(refreshToken, 'refresh')) {
			const accessToken = jwt.sign({ username }, process.env.accessToken, {
				expiresIn: '1m',
			});
			response.cookie('accessToken', accessToken, { maxAge: 60000 });
			exist = true;
		}
	}
	return exist;
};

export { authenticate, isAuthenticated };
