import env from '../../config'
import mongoose from 'mongoose'

/**
 * Initialize MongoDB
 */
export async function initMongodb(): Promise<void> {
  // Optional chaining: connection is not defined for in-memory mongodb
  mongoose.connection?.on('connected', () => {
    console.log('MongoDB connected')
  })

  // Optional chaining: connection is not defined for in-memory mongodb
  mongoose.connection?.on('error', (error) => {
    console.error('MongoDB connection error:', error)
  })

  await mongoose.connect(env.MONGODB_URI, {
    dbName: env.MONGODB_DATABASE_NAME,
  })
}

/**
 * Disconnect from MongoDB
 */
export async function mongodbDisconnect(): Promise<void> {
  await mongoose.disconnect()
}
