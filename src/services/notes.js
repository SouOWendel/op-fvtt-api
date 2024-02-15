import * as notesEntity from '../database/entities/notes.js';
import { Unauthorized } from './exceptions/HttpRequestError.js';

const findAll = async (notes) => {
	const notesResult = await notesEntity.findAll(notes);
	if (!notesResult) throw new Unauthorized('Usuário não autenticado!');
	return notesResult;
};

const create = async (notes) => {
	const [notesResult] = await notesEntity.create(notes);
	if (!notesResult) throw new Unauthorized('Usuário não autenticado!');
	return notesResult;
};

const consult = async (notes) => {
	const [notesResult] = await notesEntity.consult(notes);
	if (!notesResult) throw new Unauthorized('Usuário não autenticado!');
	return notesResult;
};

export { consult, findAll, create };
