import client from './client';

export const writePost = ({ title, body, owner }) => client.post('/api/posts', { title, body, owner });
