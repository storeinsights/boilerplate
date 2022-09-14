const mongo = require('../db/mongo');
const _ = require('lodash');
class MongoQueryRepository {
    get_mongo_data(data, queries) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = queries.query;
                for (var key in data) {
                    query = query.replace(`{${key}}`, data[key]);
                }
                const result = await mongo.findOne(queries.collection,
                    JSON.parse(query),
                    {
                        projection: queries.projection
                    });
                if (result) {
                    return resolve(result.data);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    find(data, collection, query, pagination) {
        return new Promise(async (resolve, reject) => {
            try {
                if (query && typeof query == 'string') {
                    for (var key in data) {
                        query = query.replace(`{${key}}`, data[key]);
                    }
                    query = JSON.parse(query);
                } else if (typeof query != 'object') {
                    query = {}
                }

                const result = await mongo.find(collection, query, pagination);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    findOne(collection, query) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await mongo.findOne(collection, query);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    aggregate(data, collection, match, group, unwind, sort, projection, pagination) {
        return new Promise(async (resolve, reject) => {
            try {
                for (var key in data) {
                    match = match.replace(`{${key}}`, data[key]);
                }
                match = JSON.parse(match);

                for (var key in data) {
                    group = group.replace(`{${key}}`, data[key]);
                }
                group = JSON.parse(group);
                if (unwind) {
                    for (var key in data) {
                        unwind = unwind.replace(`{${key}}`, data[key]);
                    }
                    unwind = JSON.parse(unwind);
                }

                if (projection && typeof projection == 'string') {
                    projection = JSON.parse(projection);
                }

                const result = await mongo.aggregate(collection, match, group, unwind, sort, projection, pagination);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    updateOne(data, collection, query) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!_.isObject(query)) {
                    for (var key in data) {
                        query = query.replace(`{${key}}`, data[key]);
                    }
                    query = JSON.parse(query);
                }
                const result = await mongo.updateOne(collection, query, data);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    updateMany(data, collection, query, set) {
        return new Promise(async (resolve, reject) => {
            try {
                for (var key in data) {
                    query = query.replace(`{${key}}`, data[key]);
                }
                query = JSON.parse(query);
                const result = await mongo.updateMany(collection, query, set);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    upsert(data, collection, query, set) {
        return new Promise(async (resolve, reject) => {
            try {
                if (query && typeof query == 'string') {
                    for (var key in data) {
                        query = query.replace(`{${key}}`, data[key]);
                    }
                    query = JSON.parse(query);
                } else if (typeof query != 'object') {
                    query = {}
                }

                const result = await mongo.upsert(collection, query, set);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    insertOne(data, collection) {
        return new Promise(async (resolve, reject) => {
            try {

                const result = await mongo.insertOne(collection, data);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteOne(data, collection) {
        return new Promise(async (resolve, reject) => {
            try {

                const result = await mongo.deleteOne(collection, data);
                if (result) {
                    return resolve(result);
                }
                resolve(null);
            } catch (error) {
                reject(error);
            }
        })
    }
}

module.exports = MongoQueryRepository;