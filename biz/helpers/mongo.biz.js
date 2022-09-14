const CONSTANTS = require('../../constants/appConstants');
const MongoQueryRepo = require('../../repositories/mongoQuery.repository');

class MongoBiz {
	constructor() {
		this.mongoQueryRepo = new MongoQueryRepo();
	}

	get(data,queries) {
		return new Promise(async (resolve, reject) => {	
			try {
                var result = {};
                for(var query of queries){
                    let raw = await this.mongoQueryRepo.get_mongo_data(data, query);
                    result = {
                        ...result,
                        ...raw
                    }
                }
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	find(data,collection,query,pagination) {
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.find(data,collection,query,pagination);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	findOne(collection,query){
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.findOne(collection,query);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	aggregate(data,collection,match,group,unwind,sort,projection,pagination) {
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.aggregate(data,collection,match,group,unwind,sort,projection,pagination);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	updateOne(data,collection,finder) {
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.updateOne(data,collection,finder);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	updateMany(data,collection,finder,set) {
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.updateMany(data,collection,finder,set);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	upsert(data,collection,finder,set) {
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.upsert(data,collection,finder,set);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	insertOne(data,collection) {
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.insertOne(data,collection);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

	deleteOne(data,collection) {
		return new Promise(async (resolve, reject) => {	
			try {
                let result = await this.mongoQueryRepo.deleteOne(data,collection);
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}
}

module.exports = MongoBiz;
