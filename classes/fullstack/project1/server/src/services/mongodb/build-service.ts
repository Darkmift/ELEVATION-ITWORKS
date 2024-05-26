import { BuildCountWeekly, IBuild } from 'types'
import { BuildModel } from './models'
import { formatISO } from 'date-fns'

export const buildService = {
  getBuildsPaginated: async ({
    page = 1,
    limit = Number.MAX_SAFE_INTEGER,
  }: Pagination = {}): Promise<IBuildWithId[]> => {
    try {
      const raw = await BuildModel.find()
        .skip((page - 1) * limit)
        .limit(limit)

      return raw.map((build) => {
        const {
          _id,
          endTime,
          startTime,
          errorsNumber,
          warningsNumber,
          ...rest
        } = build.toObject()

        return {
          _id: _id.toString(),
          startTime: formatISO(startTime),
          endTime: formatISO(endTime),
          // TODO: Consider correcting IBuild.errorsNumber type to number
          errorsNumber: errorsNumber.toString(),
          // TODO: Consider correcting IBuild.warningsNumber type to number
          warningsNumber: warningsNumber.toString(),
          ...rest,
        }
      })
    } catch (error) {
      console.error(error)
      return []
    }
  },
  getBuildById: async (buildId: string): Promise<IBuildWithId | null> => {
    try {
      const build = await BuildModel.findById(buildId)

      if (build) {
        const {
          _id,
          endTime,
          startTime,
          errorsNumber,
          warningsNumber,
          ...rest
        } = build.toObject()

        return {
          _id: _id.toString(),
          startTime: formatISO(startTime),
          endTime: formatISO(endTime),
          // TODO: Consider correcting IBuild.errorsNumber type to number
          errorsNumber: errorsNumber.toString(),
          // TODO: Consider correcting IBuild.warningsNumber type to number
          warningsNumber: warningsNumber.toString(),
          ...rest,
        }
      }

      return null
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
}

export interface Pagination {
  page?: number
  limit?: number
}

export interface IBuildWithId extends IBuild {
  _id: string
}
