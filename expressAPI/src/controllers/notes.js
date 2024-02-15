import { authenticated } from '../services/auth.js';
import * as notesService from '../services/notes.js';

const findAll = async (request, response) => {
	try {
		authenticated(request.headers);
		const notes = await notesService.findAll();

		return response.status(200).json(notes);
	} catch (error) {
		// Retorna o erro ou o código 500 (Internal Server Error).
		return response
			.status(error.status || 500)
			.json({ message: error.message || 'Internal Error' });
	}
};

const create = async (request, response) => {
	try {
		authenticated(request.headers);
		const notes = request.body;
		console.log(notes);
		await notesService.create(notes);

		return response.status(200).json({ message: 'Success (notes)!' });
	} catch (error) {
		// Retorna o erro ou o código 500 (Internal Server Error).
		return response
			.status(error.status || 500)
			.json({ message: error.message || 'Internal Error' });
	}
};

const consult = async (request, response) => {
	try {
		authenticated(request.headers);
		const notes = await notesService.consult(request.params);
		return response.status(200).json(notes);
	} catch (error) {
		return response
			.status(error.status || 500)
			.json({ message: error.message || 'Internal Error' });
	}
};

// TODO: update pendente
const update = async (request, response) => {
	try {
		authenticated(request.headers);
		return response.status(200).json({ message: 'Success (user)!' });
	} catch (error) {
		return response
			.status(error.status || 500)
			.json({ message: error.mensage || 'Internal Error' });
	}
};
// TODO: remove pendente
const remove = async (request, response) => {
	try {
		authenticated(request.headers);
		return response.status(200).json({ message: 'Success (user)!' });
	} catch (error) {
		return response
			.status(error.status || 500)
			.json({ message: error.mensage || 'Internal Error' });
	}
};

export { findAll, create, consult, update, remove };
