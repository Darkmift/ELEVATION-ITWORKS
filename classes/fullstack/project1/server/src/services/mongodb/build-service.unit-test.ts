import { IBuild, STATUS } from '../../../types'
import { faker } from '@faker-js/faker'
import { BuildModel } from './models'
import { IBuildWithId, buildService } from './build-service'
import { initMongodb } from '../../providers'
import { formatISO } from 'date-fns'

describe('Services', () => {
  describe('MongoDB', () => {
    beforeAll(async () => {
      await initMongodb()
    })

    describe('Build Service', () => {
      describe('getBuildsPaginated', () => {
        let builds: IBuildWithId[]

        beforeAll(async () => {
          await BuildModel.deleteMany({})

          builds = await Promise.all(
            Array.from({ length: 6 }, () => createBuild()),
          )
        })

        it('should return paginated builds', async () => {
          const result = await Promise.all([
            buildService.getBuildsPaginated(),
            buildService.getBuildsPaginated({
              limit: 2,
            }),
            buildService.getBuildsPaginated({
              limit: 2,
              page: 2,
            }),
            buildService.getBuildsPaginated({
              limit: 2,
              page: 3,
            }),
          ])

          expect(result[0].length).toEqual(6)
          expect(result[1].length).toEqual(2)
          expect(result[2].length).toEqual(2)
          expect(result[3].length).toEqual(2)
          expect(result[0]).toEqual([...result[1], ...result[2], ...result[3]])
        })
      })

      describe('getBuildById', () => {
        let build: IBuildWithId | undefined

        beforeAll(async () => {
          build = await createBuild()
        })

        it('should return build by id', async () => {
          const result = await buildService.getBuildById(
            assertDefined(build)._id,
          )

          expect(result).toEqual(build)
        })

        it('should return null', async () => {
          const result = await buildService.getBuildById(
            faker.database.mongodbObjectId(),
          )

          expect(result).toEqual(null)
        })
      })

      describe('getBuildGroupedByWeek', () => {
        let builds: IBuildWithId[]

        beforeAll(async () => {
          await BuildModel.deleteMany({})

          builds = await Promise.all([
            createBuild({ startTime: '2024-05-14' }),
            createBuild({ startTime: '2024-05-21' }),
            createBuild({ startTime: '2024-05-21' }),
          ])
        })

        it('should return builds grouped by week', async () => {
          const result = await buildService.getBuildGroupedByWeek()

          expect(result).toEqual({
            '2024-05-13': 1,
            '2024-05-20': 2,
          })
        })
      })
    })
  })
})

function assertDefined<T>(value: T | undefined): T {
  if (value === undefined) throw new Error('Value is undefined')

  return value
}

async function createBuild(
  overrides: Partial<IBuild> = {},
): Promise<IBuildWithId> {
  const build: IBuild = {
    buildId: formatISO(faker.date.past()),
    status: faker.helpers.arrayElement(Object.values(STATUS)),
    caption: faker.lorem.sentence(),
    command: faker.lorem.words(),
    startTime: formatISO(faker.date.past()),
    endTime: formatISO(faker.date.past()),
    errorsNumber: faker.number.int({ min: 0, max: 3 }).toString(),
    warningsNumber: faker.number.int({ min: 0, max: 3 }).toString(),
    ...overrides,
  }

  const model = new BuildModel(build)

  const result = await model.save()

  console.log({ _id: result._id.toString(), ...build })

  return { _id: result._id.toString(), ...build }
}
