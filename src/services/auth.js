import { Unauthorized } from './exceptions/HttpRequestError.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { login } from '../database/entities/auth.js';

dotenv.config();

const authenticate = async (user) => {
	// A primeira posição do array é pega, se não existir, não há usuário.
	const [users] = await login(user);

	if (!users) {
		throw new Unauthorized('Usuário não autenticado.');
	}

	return generateToken(user.username);
};

// As outras APIs podem autenticar utilizando o Token ao invés de buscar novamente no banco de dados.
const generateToken = (username) => {
	const accessToken = jwt.sign({ username }, process.env.accessSECRET, {
		expiresIn: '1m',
	});
	const refreshToken = jwt.sign({ username }, process.env.refreshSECRET, {
		expiresIn: '5m',
	});
	return { accessToken, refreshToken };
};

// Lógica para verificação do Token
const isAuthenticated = (token) => {
	try {
		const authorization = token.split(' ')[1];
		const decoded = jwt.verify(
			authorization,
			process.env.SECRET,
			(err, decoded) => {
				if (err) throw new Unauthorized('Invalid token');
				return decoded;
			},
		);
		return decoded.username;
	} catch (error) {
		throw new Unauthorized(error.message || 'Invalid header');
	}
};

export { authenticate, isAuthenticated };
