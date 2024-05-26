import express from 'express'
import buildSchema from './joi/schemas'
import { buildService } from '../services/mongodb/build-service'
import { IBuild } from '@/types/build'


export const getBuildsPaginated = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { page, limit } = req.query
    if (!page || !limit) {
      return res.status(400).json({ message: 'Invalid page or limit' })
    }
    const builds = await buildService.getBuildsPaginated({ page: +page, limit: +limit })
    res.status(201).json(builds)
  } catch (error) {
    console.log(error)
  }
}

export const getBuildById = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(400).json({ message: 'Invalid build id' })
    }
    const build = await buildService.getBuildById(id)
    res.status(200).json(build)
  } catch (error) {
    console.log(error)
  }
}

export const getBuildGroupedByWeek = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const builds = await buildService.getBuildGroupedByWeek()
    return res.status(200).json(builds)
  } catch (error) {
    console.log(error)
  }
}

export const createBuild = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const buildData = req.body as IBuild
    const isValide = buildSchema.parse(buildData)
    if (!isValide) {
      return res.status(400).json({ message: 'Invalid build data' })
    }
    const createdBuild = await buildService.createBuild(buildData)
    res.status(201).json(createdBuild)
  } catch (error) {
    console.log(error)
  }
}

export const editBuild = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const buildId = req.params.id
    const buildData = req.body as IBuild

    const updatedBuild = await buildService.editBuild(buildId, buildData)
    res.status(200).json({ updatedBuild })
  } catch (error) {
    console.log(error)
  }
}

export const deleteBuild = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const buildId = req.params.id
    const result = await buildService.deleteBuild(buildId)
    if (!result) {
      return res.status(500).json({ message: 'Error deleting build' })
    }
    res.status(200).json({ message: 'Build deleted' })
  } catch (error) {
    console.log(error)
  }
}
