import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import MessageResponse from '@interfaces/MessageResponse';

import v1 from './api/v1';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Welcome to TODOS API.',
  });
});

app.use('/api/v1', v1);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
