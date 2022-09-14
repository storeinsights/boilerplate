const SqlBiz = require("./helpers/sql.biz");
const CONSTANTS = require('../constants/appConstants');
const QueryRepo = require('../constants/queryRepo')
const { BaseException } = require('../exceptions');

class SampleBiz {
	constructor() {
		this.sqlBiz = new SqlBiz();
	}

	getSampleDetail(data) {
		return new Promise(async (resolve, reject) => {
			try {
                //write your biz logic
				resolve(true);
			} catch (error) {
				return reject(error);
			}
		});
	}

}

module.exports = SampleBiz;
