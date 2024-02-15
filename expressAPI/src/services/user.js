import * as userEntity from '../database/entities/user.js';
import {Unauthorized} from './exceptions/HttpRequestError.js';

// Faz uma chamada para entidade de user.js -> encontra todos os usuários
const findAll = async (user) => {
	const userResult = await userEntity.findAll(user);
	if (!userResult) throw new Unauthorized('Usuário não autenticado!');
	return userResult;
};

// Faz uma chamada para entidade de user.js -> cria um novo usuário
const create = async (user) => {
	const [userResult] = await userEntity.create(user);
	console.log(userResult);
	if (!userResult) throw new Unauthorized('Usuário não autenticado!');
	return userResult;
};

export {findAll, create};
