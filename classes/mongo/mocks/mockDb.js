jest.mock('../db/connection.js', () => {
  const { MongoClient } = require('mongodb');
  const { MongoMemoryServer } = require('mongodb-memory-server');

  let mongod, client;

  async function connect() {
    if (!mongod) {
      mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect(); // Connect only once
    }
    return client; // Return the existing connection
  }

  async function close() {
    if (client) {
      await client.close();
      client = null;
    }
    if (mongod) {
      await mongod.stop();
      mongod = null;
    }
  }

  return {
    __esModule: true,
    default: { connect, close },
  };
});
