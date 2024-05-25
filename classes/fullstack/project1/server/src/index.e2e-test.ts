import request from 'supertest';
import app from './index';

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app).get('/health').expect(200, done);
  });

  // should return 'server running' on /health
  it('should return "server running"', (done) => {
    request(app).get('/health').expect('server running', done);
  });
});
