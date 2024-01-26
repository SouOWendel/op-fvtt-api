/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable jsdoc/require-param-description */

export function up(knex) {
	return knex.raw('CREATE EXTENSION "uuid-ossp";');
}

export function down(knex) {
	return knex.raw('DROP EXTENSION "uuid-ossp";');
}
