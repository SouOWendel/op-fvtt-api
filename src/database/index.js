import knex from 'knex';

// export const postgreHelper = {
// 	client: knex,
// 	databaseHost: String(DATABASE_HOST),
// 	databasePort: Number(DATABASE_PORT),
// 	databaseName: String(DATABASE_NAME),
// 	databaseUser: String(DATABASE_USER),
// 	databasePassword: String(DATABASE_PASSWORD),
// 	databaseClient: String(DATABASE_CLIENT),
// 	databasePoolMin: Number(DATABASE_POOL_MIN),
// 	databasePoolMax: Number(DATABASE_POOL_MAX),
// };

async function connect({
	databaseHost,
	databasePort,
	databaseName,
	databaseUser,
	databasePassword,
	databaseClient,
	databasePoolMin,
	databasePoolMax,
});