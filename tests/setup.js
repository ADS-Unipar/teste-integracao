const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

beforeEach(async () => {
  await api.delete('/users/1');
});

afterEach(async () => {
  await api.post('/users', {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  });
});
