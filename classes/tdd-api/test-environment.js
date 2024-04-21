/*
// test-environment.js
import {TestEnvironment as NodeEnvironment} from 'jest-environment-node';
import { connectDB, dropDB, dropCollections } from './mocks/db/mongoose.mock.js';

class CustomTestEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    await connectDB(); // Setup DB connection once per test file
    this.global.someGlobalVar = true;
  }

  async teardown() {
    await dropCollections(); // Clean up collections after each test file
    await dropDB(); // Optionally drop the DB entirely
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

export default CustomTestEnvironment;
*/

import { TestEnvironment as NodeEnvironment } from 'jest-environment-node';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

class CustomTestEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    // Create an in-memory MongoDB server
    this.mongoServer = await MongoMemoryServer.create({
      binary: {
        version: '4.4.6', // Specify a specific version instead of 'latest'
      },
    });
    const mongoUri = this.mongoServer.getUri();

    // Connect to the in-memory database
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    this.global.mongoose = mongoose; // Optionally pass mongoose to the global scope for ease of access in tests
  }

  async teardown() {
    // Disconnect and stop the in-memory MongoDB server
    await mongoose.disconnect();
    await this.mongoServer.stop();

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

export default CustomTestEnvironment;
