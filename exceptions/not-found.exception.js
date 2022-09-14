const BaseException = require('./base.exception');

class NotFoundException extends BaseException {
	constructor(param) {
		super(param, `Not Found resource for `, 'NOT_FOUND', 404);
	}
}

module.exports = NotFoundException;
