
import {authenticated} from '../services/auth.js';

const findAll = (request, response) => {
	try {
		authenticated(request.headers);

		return response.status(200).json({message: 'success!'});
	} catch (error) {
		// Retorna o erro ou o código 500 (Internal Server Error).
		console.log('Error Custom:', error);
		return response.status(error.status || 500).json({message: error.message || 'Internal Error'});
	}
};

export {findAll};
