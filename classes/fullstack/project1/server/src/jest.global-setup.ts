import { MongoMemoryServer } from 'mongodb-memory-server'
import 'tsconfig-paths/register'

export default async () => {
  global.__INMEMORY_MONGODB__ = await MongoMemoryServer.create()
}
