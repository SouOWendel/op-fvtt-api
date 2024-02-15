import connection from '../connections/knex.js';

// Lista todos os usuários, mas filtra pelo nome de usuário e senha inseridos.
const getUsers = async (username, password) => {
	return await connection('users')
		.select('*')
		.where({username, password});
};

// Encontra todos os usuários do sistema.
const findAll = async (username, password) => {
	return await connection('users')
		.select('*');
};

// Cria um novo usuário.
const create = async (user) => {
	return await connection('users')
		.insert(user);
};

export {getUsers, findAll, create};
