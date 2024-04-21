import request from 'supertest';
import app from '../app';

describe('E2E App', function () {
  describe('GET /', function () {
    it('responds with json', async () => {
      const output = { message: 'Hello World' };

      const response = await request(app).get('/');

      expect(response.status).toEqual(200);
      expect(response.body.message).toBe(output.message);
    });
  });
});
