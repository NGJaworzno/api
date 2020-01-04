import { Router } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import compression from 'compression';

const handleCors = (router: Router): void => {
  router.use(cors({ credentials: true, origin: true }));
};

const handleBodyRequestParsing = (router: Router): void => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

const handleCompression = (router: Router): void => {
  router.use(compression());
};

export default [handleCors, handleBodyRequestParsing, handleCompression];
