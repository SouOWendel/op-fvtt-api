import {Unauthorized} from './exceptions/HttpRequestError.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {getUsers} from '../database/entities/user.js';

dotenv.config();

const authenticate = async (user) => {
	// A primeira posição do array é pega, se não existir, não há usuário.
	const [users] = await getUsers(user.username, user.password);

	if (!users) {
		throw new Unauthorized('Usuário não autenticado.');
	}
	return generateToken(user.username);
};

// As outras APIs podem autenticar utilizando o Token ao invés de buscar novamente no banco de dados.
const generateToken = (username) => {
	return jwt.sign(
		{username},
		process.env.SECRET,
		{expiresIn: 600},
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
