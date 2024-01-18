import {Unauthorized} from './exceptions/HttpRequestError.js';

const authenticate = (user) => {
	if (user.username != 'wendel' || user.password != '123') {
		throw new Unauthorized('Usuário não autenticado.');
	}
	return 'token';
};

export default authenticate;
