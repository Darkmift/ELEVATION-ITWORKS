import express from 'express';

const app = express();
const port = 3000 || PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
