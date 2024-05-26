import { BuildCountWeekly, IBuild } from '@/types'
import { BuildModel } from './models'
import { formatISO } from 'date-fns'

export const buildService = {
  getBuildsPaginated: async ({
    page,
    limit,
  }: Pagination) => {
    try {
      const builds = await BuildModel.find()
        .skip((page - 1) * limit)
        .limit(limit)

      return builds
    } catch (error) {
      console.error(error)
      return []
    }
  },
  getBuildById: async (buildId: string) => {
    try {
      const build = await BuildModel.findById(buildId)

      return build
    } catch (error) {
      console.error(error)
      return null
    }
  },
  getBuildGroupedByWeek: async (): Promise<BuildCountWeekly> => {
    try {
      const builds = await BuildModel.aggregate([
        {
          $project: {
            weekStart: {
              $dateToString: {
                format: '%Y-%m-%d',
                date: {
                  $dateTrunc: {
                    date: '$startTime',
                    unit: 'week',
                    startOfWeek: 'monday',
                  },
                },
              },
            },
          },
        },
        {
          $group: {
            _id: '$weekStart',
            count: {
              $sum: 1,
            },
          },
        },
      ])

      return builds.reduce<BuildCountWeekly>((acc, { _id, count }) => {
        acc[_id] = count
        return acc
      }, {})
    } catch (error) {
      console.error(error)
      return {}
    }
  },
  createBuild: async (buildData: IBuild) => { },
  editBuild: async (buildId: string, buildData: IBuild) => { },
  deleteBuild: async (buildId: string): Promise<boolean> => { return true },
}



export interface Pagination {
  page: number
  limit: number
}

export interface IBuildWithId extends IBuild {
  _id: string
}
