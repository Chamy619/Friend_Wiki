import client from './client';

export const menuList = () => client.get('/api/list');
