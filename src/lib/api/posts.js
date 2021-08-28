import client from './client';

export const writePost = ({ title, body, owner }) => client.post('/api/posts', { title, body, owner });
export const readPost = (id) => client.get(`/api/posts/${id}`);
export const updatePost = ({ id, title, body }) => client.patch(`/api/posts/${id}`, { title, body });
export const removePost = (id) => client.delete(`/api/posts/${id}`);
