import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import env from './utils/env.js';
import contactsRouter from './routers/contacts.js';

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

  app.use('/', contactsRouter);

  app.use((error, req, res) => {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  });

  app.use('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: 'Not found',
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export default setupServer;