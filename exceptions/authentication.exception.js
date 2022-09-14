const BaseException = require('./base.exception');

class InvalidAuthenticationException extends BaseException {
    constructor(authentication) {
        super(authentication,`Bad request: Invalid Authentication `, 'AUTHENTICATION_ERROR', 401);
    }
}

module.exports = InvalidAuthenticationException;
