import config from './mocks/db/config.js';

export default async function globalTeardown() {
  if (config.Memory) { // Config to decide if an mongodb-memory-server instance should be used
    const instance = global.__MONGOINSTANCE;
    await instance.stop();
  }
};