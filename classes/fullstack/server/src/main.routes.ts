// a express router
import express from 'express'
import userRouter from './api/users/user.routes'
const router = express.Router()

router.use('/users', userRouter)

export default router
