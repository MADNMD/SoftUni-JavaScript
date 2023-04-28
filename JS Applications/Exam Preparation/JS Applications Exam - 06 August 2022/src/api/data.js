import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllOffers() {
    return api.get('/data/offers?sortBy=_createdOn%20desc')
}

export async function getOffertById(id) {
    return api.get('/data/offers/' + id);
}

export async function createOffert(offert) {
    return api.post('/data/offers', offert);
}

export async function editOffert(id, offert) {
    return api.put('/data/offers/' + id, offert);
}

export async function deleteOffert(id) {
    return api.del('/data/offers/' + id);
}

export async function applyOffert(offertId) {
    return api.post('/data/applications', {
        offertId,
    });
}

export async function getApplyOffertById(offertId){
    return api.get(`/data/applications?where=offerId%3D%22${offertId}%22&distinct=_ownerId&count`);
}

export async function getMyApplyOffertId(offertId, userId){
    return api.get(`/data/applications?where=offerId%3D%22${offertId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}