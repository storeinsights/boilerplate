const BaseException = require('./base.exception');

class JreBadRuleException extends BaseException {
	constructor(param) {
		super(param, `Failed JRE rule: `, 'JRE_RULE_ERROR', 400);
	}
}

module.exports = JreBadRuleException;
