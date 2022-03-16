/* eslint-disable no-console */
const app = require('./app');
const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () =>
  console.info('Todo List  application started on port : ' + port)
);
