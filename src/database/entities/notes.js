// import connection from '../connections/knex.js';
import { dbNotes } from '../models.js';

const findAll = async () => {
	return await dbNotes.find({});
	// return await connection('notes').select('*');
};

const create = async (notes) => {
	return await dbNotes.create(notes);
	// return await connection('notes').insert(notes);
};

const consult = async (notes) => {
	return await dbNotes.find({ id: notes.id });
	// return await connection('notes').select('*').where('id', notes.id);
};

const update = async (notes) => {
	return await dbNotes.findOneAndUpdate({ id: notes.id }, notes);
	// return await connection('notes').where('id', notes.id).update(notes);
};

const remove = async (notes) => {
	return await dbNotes.findOneAndDelete({ id: notes.id });
	// return await connection('notes').where('id', notes.id).del();
};

export { findAll, create, consult, update, remove };
