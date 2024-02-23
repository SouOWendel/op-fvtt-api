import * as userEntity from '../database/entities/user.js';
import { Unauthorized } from './exceptions/HttpRequestError.js';

// Faz uma chamada para entidade de user.js -> encontra todos os usuários
const findAll = async (user) => {
	const userResult = await userEntity.findAll(user);
	if (!userResult) throw new Unauthorized('Usuário não autenticado!');
	return userResult;
};

// Faz uma chamada para entidade de user.js -> cria um novo usuário
const create = async (user) => {
	const userResult = await userEntity.create(user);
	console.log(userResult);
	if (!userResult) throw new Unauthorized('Usuário não autenticado!');
	return userResult;
};

const validateRequiredField = (user) => {
	let isValid = true;
	Object.keys(user).forEach((item) => {
		if (!user[item] || user[item] == '') isValid = false;
	});

	return isValid;
};

const validatePassword = (password) => {
	const regexNumber = /[0-9]/;
	const regexUpper = /[A-Z]/;

	if (password.length <= 9) return false;
	if (!regexNumber.test(password)) return false;
	if (!regexUpper.test(password)) return false;
	return true;
};

export { findAll, create, validateRequiredField, validatePassword };
