import request from 'supertest';
import app from '../app';
import { connectDB, dropCollections, dropDB } from '../mocks/db/mongoose.mock';

describe('E2E App', function () {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await dropDB();
  });

  afterEach(async () => {
    await dropCollections();
  });

  describe('GET /', function () {
    it('responds with json', async () => {
      const output = { message: 'Hello World' };

      const response = await request(app).get('/');

      expect(response.status).toEqual(200);
      expect(response.body.message).toBe(output.message);
    });
  });
});
