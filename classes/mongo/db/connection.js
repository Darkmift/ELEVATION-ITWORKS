import 'dotenv/config';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let isConnected = false;

async function connect() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client;
}

async function close() {
  if (isConnected) {
    await client.close();
    isConnected = false;
  }
}

export default { connect, close };
