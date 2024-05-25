import express from 'express'
import {
  createBuild,
  deleteBuild,
  editBuild,
  getBuildById,
  getBuildGroupedByWeek,
  getBuildsPaginated,
} from './builds.controller'
import checkRole from '../middleware/checkRole'
import checkAuth from '../middleware/checkAuth'

const buildsRouter = express.Router()

buildsRouter
  .get('/', getBuildsPaginated)
  .get('/single/:id', getBuildById)
  .get('/grouped', getBuildGroupedByWeek)
  .post('/', checkAuth, checkRole(1), createBuild) // Private
  .put('/:id', checkAuth, checkRole(1), editBuild) //private
  .delete('/:id', checkAuth, checkRole(1), deleteBuild) //private

export default buildsRouter
