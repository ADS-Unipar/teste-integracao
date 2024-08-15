const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

exports.createUser = async (req, res) => {
  try {
    const response = await api.post('/users', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const response = await api.get(`/users/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};
