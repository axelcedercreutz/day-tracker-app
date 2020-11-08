const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

const loginRouter = require('./controllers/login');
const usersRouter = require('./controllers/users');
//const blogsRouter = require('./controllers/blogs');

logger.info('connecting to', config.MONGODB_URI);

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json('build'));
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use(express.static(path.resolve(__dirname, './build')));

app.use('/api/login', loginRouter);
//app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);

/*
if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing');
  app.use('/api/testing', testingRouter);
}
*/

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
