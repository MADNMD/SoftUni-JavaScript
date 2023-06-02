import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllTheaters() {
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function getTheaterById(id) {
    return api.get('/data/theaters/' + id);
}

export async function createTheater(data) {
    return api.post('/data/theaters', data);
}

export async function editTheatre(id, data) {
    return api.put('/data/theaters/' + id, data);
}

export async function deleteTheatre(id) {
    return api.del('/data/theaters/' + id);
}

export async function userProfilePage(userId) {
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function likeTheatre(theaterId) {
    return api.post('/data/likes', {
        theaterId
    });
}

export async function getLikeTheatreById(theaterId) {
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function getLikeMyTheatreById(theaterId, userId) {
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}