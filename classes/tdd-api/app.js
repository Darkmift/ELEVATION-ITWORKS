// express hello world
import express from 'express';
import logger from './utils/logger.js';
import { PORT } from './config/index.js';
import mainRouter from './main.routes.js';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/api/v1', mainRouter);

export default app;
