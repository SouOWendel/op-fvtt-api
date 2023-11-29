import Note from './entities/notes.js';

import * as http from 'http';
const PORT = 3000;
const DEFAULT_HEADER = {'Content-Type': 'application/json'};

import {generateInstance} from './factories/updateNotesFactory.js';
const noteService = generateInstance();

const routes = {
	'/notes:get': async (request, response) => {
		console.log('entrou no get');
		const {id} = request.queryString;
		const notes = await noteService.find(id);
		response.write(JSON.stringify({results: notes}));

		return response.end();
	},
	'/notes:post': async (request, response) => {
		console.log('entrou no post');
		// Async Iterator
		for await (const data of request) {
			try {
				const item = JSON.parse(data);
				const note = new Note(item);
				const {error, valid} = note.isValid();
				console.log(error, valid);
				if (!valid) {
					console.log('é aqui');
					response.writeHead(400, DEFAULT_HEADER);
					response.write(JSON.stringify({error: error.join(',')}));

					return response.end();
				}

				const id = await noteService.create(note);
				response.writeHead(201, DEFAULT_HEADER);
				response.write(JSON.stringify({success: 'Nota foi criada com sucesso!', id}));

				// Só se joga o return aqui pois é um objeto na requisição.
				// se fosse um arquivo sob demanda, ele poderia entrar mais
				// vezes neste evento por isso o return seria removido.
				return response.end();
			} catch (error) {
				return handleError(response)(error);
			}
		}
	},
	'default': (request, response) => {
		console.log('entrou no default');
		response.write('Hello!');
		response.end();
	},
};

const handleError = (response) => {
	return (error) => {
		console.error('Deu ruim!***', error);
		response.writeHead(500, DEFAULT_HEADER);
		response.write(JSON.stringify({error: 'Internal Server Error!'}));

		return response.end();
	};
};

const handler = (request, response) => {
	const {url, method} = request;
	// eslint-disable-next-line no-unused-vars
	const [first, route, id] = url.split('/');
	request.queryString = {id: isNaN(id) ? id : Number(id)};

	const key = `/${route}:${method.toLowerCase()}`;
	response.writeHead(200, DEFAULT_HEADER);

	const chosen = routes[key] || routes.default;
	return chosen(request, response).catch(handleError(response));
};

http.createServer(handler)
	.listen(PORT, () => console.log('Servidor rodando na porta', PORT));
