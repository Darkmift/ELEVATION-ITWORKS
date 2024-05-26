jest.mock('../config')

process.env.MONGODB_URI = global.__INMEMORY_MONGODB__.getUri()
