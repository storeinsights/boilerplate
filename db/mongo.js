const mongoose = require('mongoose');
const BaseException = require('../exceptions/base.exception')

const db = mongoose.connection;

module.exports = {
	findOne: (collection, query, projection) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			const data = await db.collection(collection).findOne(query, projection).sort({_id:-1});
			resolve(data);
		} catch (error) {
			reject(error);
		}
	}),

	find: (collection, query, pagination) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			let data;
			if (pagination && (pagination.page || pagination.size)) {
				pagination.page = pagination.page || 1;
				pagination.size = pagination.size || 5;
				pagination.startIndex = (pagination.page - 1) * pagination.size;
				data = await db.collection(collection).find(query).skip(Number(pagination.startIndex)).limit(Number(pagination.size)).sort({_id:-1}).toArray();
			} else {
				data = await db.collection(collection).find(query).toArray();
			}
			
			resolve(data);
		} catch (error) {
			reject(error);
		}
	}),

	aggregate: (collection, match, group, unwind, sort, project, pagination) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			let data;
			let query = []
			query.push({$match:match});
			if (unwind) query.push(unwind);
			query.push({$group:group});
			if (sort) query.push({$sort:{"createdAt": -1}});
			if (project) query.push({$project:project});
			query.push({$sort: {_id: -1}});
			
			if (pagination && (pagination.page || pagination.size)) {
				pagination.page = pagination.page || 1;
				pagination.size = pagination.size || 5;
				pagination.startIndex = (pagination.page - 1) * pagination.size;
				data = await db.collection(collection).aggregate(query).skip(Number(pagination.startIndex)).limit(Number(pagination.size)).toArray();
			} else {
				data = await db.collection(collection).aggregate(query).toArray();
			}

			
			
			resolve(data);
		} catch (error) {
			reject(error);
		}
	}),

	updateOne: (collection, query, data) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			
			const result = await db.collection(collection).updateOne(query, { $set:{...data} });
			resolve(result);
		} catch (error) {
			reject(error);
		}
	}),

	updateMany: (collection, query, set) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			const result = await db.collection(collection).updateMany(query, { $set:set });
			resolve(result);
		} catch (error) {
			reject(error);
		}
	}),

	upsert: (collection, query, set) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			const result = await db.collection(collection).updateMany(query, { $set:set }, { upsert :true });
			resolve(result);
		} catch (error) {
			reject(error);
		}
	}),

	findAndModify: (collection, query, data) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			const result = await db.collection(collection).updateOne(query, { $set:{...data} }, { upsert: true });
			resolve(result);
		} catch (error) {
			reject(error);
		}
	}),

	insertOne: (collection, data) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			const result = await db.collection(collection).insertOne(data);
			resolve(result);
		} catch (error) {
			reject(error);
		}
	}),

	deleteOne: (collection, data) => new Promise(async (resolve, reject) => {
		try {
			if (!db) {
				throw new BaseException('Mongo Connection Exception occured');
			}
			const result = await db.collection(collection).deleteOne(data);
			resolve(result);
		} catch (error) {
			reject(error);
		}
	}),
};