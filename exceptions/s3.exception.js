const BaseException = require('./base.exception');

class S3Exception extends BaseException {
	constructor(param) {
		super(param, `Bad S3 Request: Missing/Invalid request `, 'ERROR', 404);
	}
}

module.exports = S3Exception;
