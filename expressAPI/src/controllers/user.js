import * as userService from '../services/user.js';
import {authenticated} from '../services/auth.js';

/**
 * Faz a verificação da autenticação e após isso chama as regras
 * de negócio no serviço de usuário para encontrar todos os usuários,
 * além disso, faz o tratamento dos erros.
 * @param {*} request Requisições da API
 * @param {*} response Respostas da API
 * @returns {object} Retorna o status e a resposta em JSON
 */
const findAll = async (request, response) => {
	try {
		authenticated(request.headers);
		const users = await userService.findAll();

		return response.status(200).json(users);
	} catch (error) {
		return response.status(error.status || 500).json({message: error.mensage || 'Internal Error'});
	}
};

/**
 * Faz a verificação da autenticação e após isso manda as informações
 * do body para as regras de negócio de create() para criar um novo
 * usuário.
 * @param {*} request Requisições da API
 * @param {*} response Respostas da API
 * @returns {object} Retorna o status e a resposta em JSON
 */
const create = async (request, response) => {
	try {
		authenticated(request.headers);
		const user = request.body;
		console.log('req.body', user);
		await userService.create(user);

		return response.status(200).json({message: 'Success (user)!'});
	} catch (error) {
		return response.status(error.status || 500).json({message: error.mensage || 'Internal Error'});
	}
};

// TODO: update pendente
const update = async (request, response) => {
	try {
		authenticated(request.headers);
		return response.status(200).json({message: 'Success (user)!'});
	} catch (error) {
		return response.status(error.status || 500).json({message: error.mensage || 'Internal Error'});
	}
};
// TODO: remove pendente
const remove = async (request, response) => {
	try {
		authenticated(request.headers);
		return response.status(200).json({message: 'Success (user)!'});
	} catch (error) {
		return response.status(error.status || 500).json({message: error.mensage || 'Internal Error'});
	}
};

export {findAll, create, update, remove};
