require('express-async-errors');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const router = require('./api');

const notFoundMiddleware = require('./middlewares/notFoundHandler');
const errorHandling  = require('./middlewares/errorHandler');

const db = require('./models');
const responseFormat = require('./middlewares/responseFormat');
const app = express();

db.sequelize.sync({});
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(responseFormat);
app.use('/api/v1', router);
app.use(notFoundMiddleware);
app.use(errorHandling)

module.exports = app;