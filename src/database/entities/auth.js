// import connection from '../connections/knex.js';
import { dbUsers } from '../models.js';

const login = async (login) => {
	return dbUsers.find({ username: login.username, password: login.password });
	// return await connection('users')
	// 	.select('*')
	// 	.where({ username: login.username, password: login.password });
};

export { login };
