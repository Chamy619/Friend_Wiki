import client from './client';

export const read = () => client.get('/api/admin/genealogy');
