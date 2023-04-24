import * as auth from '../auth/auth.js';
import * as api from '../api/api.js'

export const login = auth.login
export const register = auth.register;
export const logout = auth.logout;

export async function getAllAlbums() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getAlbumById(id) {
    return api.get('/data/albums/' + id);
}

export async function createAlbum(album) {
    return api.post('/data/albums', album);
}

export async function editAlbum(id, album) {
    return api.put('/data/albums/' + id, album);
}

export async function deleteAlbum(id) {
    return api.del('/data/albums/' + id);
}

export async function searchAlbum(query) {
    return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}