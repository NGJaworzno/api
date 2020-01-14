import http from 'http';
import express from 'express';
import { createConnection } from 'typeorm';

import config from './config';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './services';
import errorHandlers from './middleware/errorHandlers';

config.check();

process.on('uncaughtException', (e) => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);
createConnection().then()

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => (
  console.log(`Server is running http://localhost:${PORT}...`)
));
