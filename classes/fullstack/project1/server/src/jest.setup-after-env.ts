import * as config from './config'
import { MongoMemoryServer } from 'mongodb-memory-server'

jest.mock('./config')

// @ts-expect-error
config.BUILD_AGREGATION_START_OF_WEEK = 'monday'

// @ts-expect-error
config.MONGODB_URI = global.__INMEMORY_MONGODB__.getUri()
