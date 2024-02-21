/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable jsdoc/require-param-description */

export function up(knex) {
	return knex.schema
		.createTable('users', (table) => {
			table.increments('id').primary();
			table.string('username').unique().notNullable();
			table.string('password').notNullable();
			table.timestamp('createdAt').defaultTo(knex.fn.now());
			table.timestamp('updatedAt').defaultTo(knex.fn.now());
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err;
		});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema.dropTable('users');
}
