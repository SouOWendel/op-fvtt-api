import connection from '../connections/knex.js';

// Chamada para o banco de dados
const getUsers = async (username, password) => {
	return await connection('users')
		.select('*')
		.where({username, password});
};

export {getUsers};
