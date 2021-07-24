import client from './client';

export const login = ({ email, password }) => client.post('/api/auth/login', { email, password });

export const register = ({ email, username, password }) =>
  client.post('/api/auth/register', { email, username, password });

export const check = () => client.get('/api/auth/check');
