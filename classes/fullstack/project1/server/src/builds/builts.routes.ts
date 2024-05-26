import express, { Router } from 'express'
import {
  createBuild,
  deleteBuild,
  editBuild,
  getBuildById,
  getBuildGroupedByWeek,
  getBuildsPaginated,
} from './builds.controller'
// import checkRole from '../middleware/checkRole'
// import checkAuth from '../middleware/checkAuth'

const buildsRouter: Router = express.Router()

// STUB
const checkAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {next()}
const checkRole = (role: number) => (req: express.Request, res: express.Response, next: express.NextFunction) => {next()}

buildsRouter
  .get('/', getBuildsPaginated)
  .get('/single/:id', getBuildById)
  .get('/grouped', getBuildGroupedByWeek)
  .post('/', checkAuth, checkRole(1), createBuild) // Private
  .put('/:id', checkAuth, checkRole(1), editBuild) //private
  .delete('/:id', checkAuth, checkRole(1), deleteBuild) //private

export default buildsRouter
