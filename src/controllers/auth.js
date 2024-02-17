// https://http.cat/ útil para saber os códigos

import userModel from '../models/user.js';
import {authenticate as authService} from '../services/auth.js';

const authenticate = async (request, response) => {
	try {
		const user = userModel(request.params);
		const token = await authService(user);
		return response.status(200).json({token: token});
	} catch (error) {
		// Retorna o erro ou o código 500 (Internal Server Error).
		console.log('Error Custom:', error);
		return response.status(error.status || 500).json({message: error.message || 'Internal Error'});
	}
};

export {authenticate};