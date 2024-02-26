// import connection from '../connections/knex.js';
import { dbUsers } from '../models.js';

// Lista todos os usuários, mas filtra pelo nome de usuário e senha inseridos.
const getAllUsers = async (username, password) => {
	return await dbUsers.find({});
	// return await connection('users').select('*');
};

// Encontra todos os usuários do sistema.
const findAll = async (username, password) => {
	return await dbUsers.find({});
	// return await connection('users').select('*');
};

// Cria um novo usuário.
const create = async (user) => {
	return await dbUsers.create({
		username: user.username,
		password: user.password,
	});
	// return await connection('users').insert(user);
};

export { getAllUsers, findAll, create };
