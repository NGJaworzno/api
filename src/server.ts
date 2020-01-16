import 'module-alias/register';
import http from 'http';
import express from 'express';
import { createConnection } from 'typeorm-plus';

import config from '@config/index';
import { applyMiddleware, applyRoutes } from '@utils/index';
import middleware from '@middleware/index';
import routes from '@routes/index';
import errorHandlers from '@middleware/errorHandlers';

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
createConnection().then();

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => (
  console.log(`Server is running http://localhost:${PORT}...`)
));
