import { config } from 'dotenv'

config()

export const MONGODB_DATABASE_NAME =
  process.env['MONGODB_DATABASE_NAME'] ?? 'test'

export const MONGODB_URI = process.env['MONGODB_URI'] ?? ''
