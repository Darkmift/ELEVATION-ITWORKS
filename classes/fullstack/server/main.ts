import "reflect-metadata"
import 'dotenv/config'
import express from 'express'
import mainRouter from './src/main.routes'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1', mainRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
