import client from './client';

export const login = ({ email, password, code }) => client.post('/api/auth/login', { email, password, code });

export const register = ({ email, username, password }) =>
  client.post('/api/auth/register', { email, username, password });

export const logout = () => client.get('/api/auth/login');

export const check = () => client.get('/api/auth/check');

export const oauth = ({ code }) => client.post('/api/auth/oauth', { code });
