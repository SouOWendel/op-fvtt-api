// https://http.cat/ útil para saber os códigos

import userModel from '../models/user.js';
import {
	authenticate as authService,
	isAuthenticated as tokenCheck,
} from '../services/auth.js';
// import { InvalidToken } from '../services/exceptions/HttpRequestError.js';

const authenticate = async (request, response) => {
	try {
		const user = userModel(request.body);
		const { accessToken, refreshToken } = await authService(user);

		response.cookie('accessToken', accessToken, { maxAge: 180000 }); // maxAge = 3mins
		response.cookie('refreshToken', refreshToken, {
			maxAge: 300000, // maxAge = 5mins
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

const isAuthenticated = (request, response, next) => {
	try {
		const accessToken = request.cookies.accessToken;
		if (!accessToken && renewToken(request, response, next)) next();
		else {
			const decodedUsername = tokenCheck(accessToken, 'access');
			request.username = decodedUsername;
			next();
		}
	} catch (error) {
		next(error);
	}
};

const renewToken = (request, response, next) => {
	try {
		const refreshToken = request.cookies.refreshToken;
		let exist = false;
		if (!refreshToken) {
			// next(new InvalidToken('Refresh is invalid or no exist!'));
			throw new Error('Refresh Token is invalid or no exist!');
		} else {
			const decode = tokenCheck(refreshToken, 'refresh');
			if (decode) {
				const accessToken = jwt.sign(
					{ username: decode.username },
					process.env.accessSECRET,
					{
						expiresIn: '3m',
					},
				);
				response.cookie('accessToken', accessToken, { maxAge: 180000 }); // maxAge = 3mins
				exist = true;
			}
		}
		return exist;
	} catch (error) {
		next(error);
	}
};

export { authenticate, isAuthenticated, renewToken };
