import { MONGODB_DATABASE_NAME, MONGODB_URI } from '../config'
import mongoose, { connection } from 'mongoose'

/**
 * Initialize MongoDB
 */
export async function initMongodb(): Promise<void> {
  connection.on('connected', () => {
    console.log('MongoDB connected')
  })

  connection.on('error', (error) => {
    console.error('MongoDB connection error:', error)
  })

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
