const BaseException = require('./base.exception');

class MongoException extends BaseException {
	constructor(param) {
		super(param, `Bad request: `, 'PARAM_ERROR', 500);
	}
}

module.exports = MongoException;
