import request from 'supertest';
import app from './app';
import { connectDB, dropCollections, dropDB } from './mocks/db/mongoose.mock';

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

      const response = await request(app).get('/').set('Accept', 'application/json');

      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.message).toBe(output.message);
    });
  });

  describe('GET /api/v1', function () {
    it('responds with json', async () => {
      const output = { message: 'Hello from api/v1/' };
      const response = await request(app).get('/api/v1').set('Accept', 'application/json');

      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.message).toBe(output.message);
    });
  });
});
