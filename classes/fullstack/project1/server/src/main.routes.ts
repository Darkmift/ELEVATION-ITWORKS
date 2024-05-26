// an express router
import { Router } from 'express'
import buildsRouter from './builds/builts.routes'

const mainRouter: Router = Router()

mainRouter.use('/builds', buildsRouter)

export default mainRouter

