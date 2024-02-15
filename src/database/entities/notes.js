import connection from '../connections/knex.js';

const findAll = async () => {
	return await connection('notes').select('*');
};

const create = async (notes) => {
	return await connection('notes').insert(notes);
};

const consult = async (notes) => {
	return await connection('notes').select('*').where('id', notes.id);
};

const update = async () => {};

const remove = async () => {};

export { findAll, create, consult, update, remove };
