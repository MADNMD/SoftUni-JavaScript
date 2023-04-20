import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllAlbums() {
    return api.get('/data/albums?sortBy=_createdOn%20desc');
}

export async function getAlbumsById(id) {
    return api.get('/data/albums/' + id);
}

export async function createAlbum(album) {
    return api.post('/data/albums/', album);
}

export async function editAlbum(id, album) {
    return api.put('/data/albums/' + id, album);
}

export async function deleteAlbum(id) {
    return api.del('/data/albums/' + id);
}

export async function likeAlbum(albumId) {
    return api.post('/data/likes', {
        albumId
    });
}

export async function getLikesByAlbumId(albumId) {
    return api.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function getMyLikeByAlbumId(albumId, userId) {
    return api.get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}