const BaseException = require('./base.exception');

class InvalidParamException extends BaseException {
	constructor(param) {
		super(param, `Bad request: Invalid param `, 'PARAM_ERROR', 400);
	}
}

module.exports = InvalidParamException;
