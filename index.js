// const  { APPLICATION_NAME } = require('./constants/boilerplate.config');
// if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') 
// {
//     // eslint-disable-next-line global-require
//     var apm = require('elastic-apm-node').start({
//         serviceName: APPLICATION_NAME,
//         secretToken: '',
//         serverUrl: '',
//         captureBody: 'all',
//     });
// }
const express = require('express');
const cors = require('cors');
const httpContext = require('express-http-context');
const swaggerDocumentation = require('./swagger/swagger.json');
const swaggerUI = require("swagger-ui-express");
const logger = require('./services/winstonLogging');
const consoleLogger = require('./services/console.logging');
const mongoConnect = require('./db/mongoConnection');
const models = require('./models/sql/sequelize');

const { 
	errorHandlingMiddleware, 
	responseMiddleware, 
	requestMiddleware, 
} = require('./middleware');

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation))

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));
global.dbConnection = models.sequelize;


//use request context as middleware
app.use(httpContext.middleware);

app.use(express.static('storage/tmp'));
app.use(express.static('public'))


// Do not change order below this
app.use(requestMiddleware);

app.use(responseMiddleware);

// Routes will always go here 
app.use('/', require('./routes/urls'));

app.use(errorHandlingMiddleware);
// Do not change order above this

//staring mongo connection
mongoConnect(()=>{
	console.log('Mongo server connected');
  });

//error logger global
global.logger = logger();

//console logging
// consoleLogger();

//exit everything 
process.on('SIGINT', () => {
    process.exit(0);
});

var port = process.env.PORT || 8000;
app.listen(port);

console.log(`Server started on port ${port} on ENV: ${process.env.NODE_ENV}`);

module.exports = app;