import connection from '../connections/knex.js';

const login = async (login) => {
	return await connection('users')
		.select('*')
		.where({ username: login.username, password: login.password });
};

export { login };
