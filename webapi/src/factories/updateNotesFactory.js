import {join} from 'path';

// https://www.codingbeautydev.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
import fileDirName from '../utils/file-dir-name.js';
// eslint-disable-next-line no-unused-vars
const {__dirname, __filename} = fileDirName(import.meta);

import UpdateNotesRepository from '../repositories/updateNotesRepository.js';
import UpdateNotesService from '../services/updateNotesServices.js';

const file = join(__dirname, '../../database', 'messages.json');
const generateInstance = () => {
	const updateNotesRepository = new UpdateNotesRepository({file});
	const updateNotesServices = new UpdateNotesService({updateNotesRepository});

	return updateNotesServices;
};

export {generateInstance};

// generateInstance().find().then(console.log);
