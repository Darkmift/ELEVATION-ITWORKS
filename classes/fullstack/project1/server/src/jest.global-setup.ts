import { MongoMemoryServer } from 'mongodb-memory-server'
import 'tsconfig-paths/register'
import { initMongodb } from './providers'

export default async () => {
  global.__INMEMORY_MONGODB__ = await MongoMemoryServer.create()
  await initMongodb()
}
