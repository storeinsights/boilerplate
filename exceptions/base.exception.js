class BaseException extends Error {
	constructor(message,errorType, code, status = 500) {
		if (!message) {
			message = 'Oops!!! Something went wrong';
		}

		super(message);
		this.errorType = errorType;
		this.status = status;
		this.code = code || 'ERROR';
	}
}

module.exports = BaseException;
