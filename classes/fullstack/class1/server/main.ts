import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import mainRouter from './src/main.routes';
import mongoose from 'mongoose';
import authRouter from '@/api/auth/auth.router';
import cookieParse from "cookie-parser"

dotenv.config({ path: '.env.development.local' });

const app = express();
const port = process.env.PORT || 3000;

const login = process.env.MONGODB_LOGIN;
const password = process.env.MONGODB_PASSWORD;

const url = `mongodb+srv://${login}:${password}@cluster0.rcvthbc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.json());
app.use(cookieParse());
app.use('/api/v1', mainRouter);
app.use('/api/v1/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(url);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
