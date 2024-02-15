/**
 *
 * @param message
 */
function BadRequest(message) {
	this.name = 'BadRequest';
	this.message = message || 'Bad Request';
	this.status = 400;
}

/**
 *
 * @param message
 */
function Unauthorized(message) {
	this.name = 'Unauthorized';
	this.message = message || 'Request Unauthorized';
	this.status = 401;
}


BadRequest.prototype = new Error();
Unauthorized.prototype = new Error();
// BadRequest.prototype = Object.create(BadRequest.prototype);
// BadRequest.prototype.constructor = BadRequest;

// Unauthorized.prototype = Object.create(Unauthorized.prototype);
// Unauthorized.prototype.constructor = Unauthorized;

export {BadRequest, Unauthorized};
