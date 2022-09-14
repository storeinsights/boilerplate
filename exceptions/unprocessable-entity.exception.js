const BaseException = require('./base.exception');

class UnprocessableEntityException extends BaseException {
	constructor(conf) {
		super(conf, `Unprocessable Entity: Missing config`, 'UNPROCESSABLE_ENTITY_ERROR', 422);
	}
}

module.exports = UnprocessableEntityException;
