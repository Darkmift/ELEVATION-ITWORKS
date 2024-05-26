import env from '../config'

jest.mock('../config')

// @ts-expect-error
env.MONGODB_URI = global.__INMEMORY_MONGODB__.getUri()
