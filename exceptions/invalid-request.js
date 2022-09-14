const BaseException = require('./base.exception');

class InvalidRequestException extends BaseException {
	constructor(param) {
		super(param, `Bad request: Invalid request `, 'PARAM_ERROR', 400);
	}
}

module.exports = InvalidRequestException;
