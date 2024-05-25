import { config } from 'dotenv'

config()

export const BUILD_AGREGATION_START_OF_WEEK =
  process.env['BUILD_AGREGATION_START_OF_WEEK'] ?? 'monday'

export const MONGODB_DATABASE_NAME =
  process.env['MONGODB_DATABASE_NAME'] ?? 'test'

export const MONGODB_URI = process.env['MONGODB_URI'] ?? ''
