// express hello world
import express from 'express';
import mainRouter from './main.routes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/api/v1', mainRouter);

export default app;
