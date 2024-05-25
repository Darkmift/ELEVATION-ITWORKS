import { MONGODB_DATABASE_NAME, MONGODB_URI } from '../config'
import mongoose from 'mongoose'

/**
 * Initialize MongoDB
 */
export async function initMongodb(): Promise<void> {
  await mongoose.connect(MONGODB_URI, {
    dbName: MONGODB_DATABASE_NAME,
  })
}

/**
 * Disconnect from MongoDB
 */
export async function mongodbDisconnect(): Promise<void> {
  await mongoose.disconnect()
}
