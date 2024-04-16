import express from 'express';
import userRouter from './user/routes.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  if (req.body?.name === 'John') {
    res.status(403).send('Forbidden we dopnt like Jhon');
  }
  next();
});
// app.use(middleware1, middleware2);

app.get('/', (req, res) => {
  res
    // .send({ hello: 'world' });
    // .end()
    .status(204)
    .json({ hello: 'world' });
});

app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
