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

const update = async (notes) => {
	console.log('Supostamente atualizou', notes);
	return await connection('notes').where('id', notes.id).update(notes);
};

const remove = async (notes) => {
	return await connection('notes').where('id', notes.id).del();
};

export { findAll, create, consult, update, remove };
