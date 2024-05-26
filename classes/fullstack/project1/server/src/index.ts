import 'dotenv/config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Express } from 'express'
import { initMongodb } from './providers'
import mainRouter from './main.routes'

initMongodb().catch((err) => {
  console.error(err)
})

const app: Express = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.get('/health', (req, res) => {
  res.send('server running')
})

app.use('/api/v1', mainRouter)

export default app
