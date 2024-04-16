import express from 'express';

const port = 3000 || PORT;

const app = express();
app.use(express.json());

app.get('/helth', (req, res) => {
  res.json({ 'ok:': new Date().toDateString() });
});

export default app;
