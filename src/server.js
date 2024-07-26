import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import env from './utils/env.js';
import contactsRouter from './routers/contacts.js';
import authRouter from './routers/auth-router.js';
import cookieParser from 'cookie-parser';
import path from 'node:path';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { PUBLIC_DIR } from './constants/user-constants.js';
import swaggerDocs from './middlewares/swaggerDocs.js';

const port = env('PORT', '3000');

const setupServer = () => {
  const app = express();

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(express.json());
  app.use(logger);
  app.use(cors());
  app.use(cookieParser());
  app.use(express.static(PUBLIC_DIR));
  app.use('/api-docs', swaggerDocs());

  app.use('/auth', authRouter);
  app.use('/contacts', contactsRouter);

  app.use(errorHandler);

  app.use('*', notFoundHandler);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export default setupServer;