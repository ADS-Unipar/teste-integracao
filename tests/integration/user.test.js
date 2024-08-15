const request = require('supertest');
const app = require('../../app');

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Jane Doe', email: 'jane@example.com' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Jane Doe');
  });

  it('should fetch a user by id', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('John Doe');
  });
});
