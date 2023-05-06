import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllMemes() {
    return api.get('/data/memes?sortBy=_createdOn%20desc');
}

export async function getMemeById(id) {
    return api.get('/data/memes/' + id);
}

export async function createMeme(meme) {
    return api.post('/data/memes', meme);
}

export async function editMemeById(id, meme) {
    return api.put('/data/memes/' + id, meme);
}

export async function deleteMeme(id) {
    return api.del('/data/memes/' + id);
}

export async function userProfile(userId) {
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}