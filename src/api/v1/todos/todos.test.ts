import request from 'supertest';

import app from '../../../app';

describe('GET /api/v1/todos', () => {
  it('responds with a json list todos', async () => {
    request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBeGreaterThanOrEqual(0);
      });
  });
});
