// an express router
import { Router } from 'express'
import buildsRouter from './builds/builts.routes'
import authRouter from './auth/auth.routes'

const mainRouter: Router = Router()

mainRouter.use('/builds', buildsRouter)
mainRouter.use('/auth', authRouter)

export default mainRouter

