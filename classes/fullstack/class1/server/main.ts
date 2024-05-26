import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import mainRouter from './src/main.routes';
import cookieParse from "cookie-parser"

dotenv.config({ path: '.env.development.local' });

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParse());
app.use('/api/v1', mainRouter);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
