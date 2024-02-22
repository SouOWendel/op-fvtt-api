import { Unauthorized } from './exceptions/HttpRequestError.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { login } from '../database/entities/auth.js';

dotenv.config();

const authenticate = async (user) => {
	try {
		// A primeira posição do array é pega, se não existir, não há usuário.
		const [users] = await login(user);

		if (!users) {
			throw new Unauthorized('Usuário não autenticado.');
		}

		return generateToken(user.username);
	} catch (error) {
		console.log(error);
	}
};

// As outras APIs podem autenticar utilizando o Token ao invés de buscar novamente no banco de dados.
const generateToken = (username) => {
	const accessToken = jwt.sign({ username }, process.env.accessSECRET, {
		expiresIn: '3m',
	});
	const refreshToken = jwt.sign({ username }, process.env.refreshSECRET, {
		expiresIn: '5m',
	});
	return { accessToken, refreshToken };
};

// Lógica para verificação do Token
const isAuthenticated = (authorization, type) => {
	try {
		if (type !== 'access' && type !== 'refresh') {
			return console.log('Invalid secret');
		}
		const secret = type + 'SECRET';
		const decoded = jwt.verify(
			authorization,
			process.env[secret],
			(err, decoded) => {
				if (err) {
					// TODO: CONSOLE.LOG
					console.log(err);
					throw new Unauthorized('Invalid access token or refresh token');
				}
				return decoded;
			},
		);
		return decoded.username;
	} catch (error) {
		throw new Unauthorized(error.message || 'Invalid header');
	}
};

export { authenticate, isAuthenticated };
