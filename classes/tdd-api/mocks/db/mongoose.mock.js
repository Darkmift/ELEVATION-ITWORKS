import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import logger from '../../utils/logger.js';
let mongo = null;

export const connectDB = async () => {
  if (mongo) return;
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  //define mongoose on connect and on error amnd on disconnect
  mongoose.connection.on('connected', () => {
    logger.info('Mongoose Mock connected to ' + uri);
  });

  mongoose.connection.on('error', (err) => {
    logger.info('Mongoose Mock connection error: ', err);
  });

  mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose Mock disconnected');
  });

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const dropDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
    mongo = null;
  }
};

export const dropCollections = async () => {
  if (mongo) {
    const collections = await mongoose.connection?.db?.collections();
    if (!collections) {
      return;
    }
    for (let collection of collections) {
      await collection.drop();
    }
  }
};
