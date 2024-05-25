import 'dotenv/config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Express } from 'express'
const app: Express = express()

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.get('/health', (req, res) => {
  res.send('server running');
});

export default app;
