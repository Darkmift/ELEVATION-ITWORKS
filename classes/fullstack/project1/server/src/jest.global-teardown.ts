import 'tsconfig-paths/register'

export default async () => {
  await global.__INMEMORY_MONGODB__.stop()
}
