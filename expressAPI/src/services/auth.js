import {Unauthorized} from './exceptions/HttpRequestError.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = (user) => {
	if (user.username != 'wendel' || user.password != '123') {
		throw new Unauthorized('Usuário não autenticado.');
	}
	return generateToken(user.username);
};

// As outras APIs podem autenticar utilizando o Token ao invés de buscar novamente no banco de dados.
const generateToken = (username) => {
	return jwt.sign(
		{username},
		process.env.SECRET,
		{expiresIn: 120},
	);
};

// Lógica para verificação do Token
const authenticated = (headers) => {
	try {
		console.log(headers);
		const authorization = headers.authorization;
		const token = authorization.split(' ')[1];
		console.log(authorization);

		const decoded = jwt.verify(token, process.env.SECRET, (err, decoded) => {
			console.log(err);
			if (err) throw new Unauthorized('Invalid token');
			return decoded;
		});
		console.log(decoded);

		return decoded.username;
	} catch (error) {
		throw new Unauthorized(error.message || 'Invalid header');
	}
};

export {authenticate, authenticated};
