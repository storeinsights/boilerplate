const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const SequelizeAuto = require('sequelize-auto')

const basename = path.basename(__filename);
const config = require('config');

const db = {};

const {
	host,
	user,
	password,
	database,
	port
} = config.get('db.mysql');

const sequelize = new Sequelize(database, user, password, {
	host,
	pool: {
		max: 2,
		min: 1,
		acquire: 30000,
		idle: 10000,
	},
	dialect: 'mysql',
	port: port,
	define: {
		timestamps: false,
	},
});

sequelize.authenticate().then(() => {
	console.log('MySQL connected!');
}).catch((err) => {
	// TODO: throw and stop service if db goes down
	throw err;
});

fs
	.readdirSync(__dirname)
	.filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
	.forEach(file => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const option = {
    directory: './models/sql', // where to write files
    additional: {
        timestamps: false
        // ...options added to each model
    },
	noInitModels: true,
    tables: [], // use all tables, if omitted

}

// uncomment this code when you want to fetch the model from db and change the option accordingly
const auto = new SequelizeAuto(sequelize, null, null, option);
// auto.run();

module.exports = db;
global.db = db;