/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable jsdoc/require-param-description */

// id, minCoreVersion, maxCoreVersion, minSysVersion, maxSysVersion, type,
// display, title, content

export function up(knex) {
	return knex.schema
		.createTable('notes', (table) => {
			table.increments('id').primary();
			table.string('minCoreVersion');
			table.string('maxCoreVersion');
			table.string('minSysVersion').notNullable();
			table.string('maxSysVersion').notNullable();
			table.string('type').notNullable();
			table.string('display').notNullable();
			table.string('title').notNullable();
			table.string('content', 8000).notNullable();
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
	return knex.schema.dropTable('notes');
}
