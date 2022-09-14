const BaseException = require('./base.exception');

class MissingParamException extends BaseException {
	constructor(param) {
		super(param, `Bad query parameter: Missing/Invalid param `, 'QUERY_PARAM_ERROR', 400);
	}
}

module.exports = MissingParamException;
