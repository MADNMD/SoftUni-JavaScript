import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllFruits() {
    return api.get('/data/fruits?sortBy=_createdOn%20desc');
}

export async function getFruitById(id) {
    return api.get('/data/fruits/' + id);
}

export async function createFruit(fruit) {
    return api.post('/data/fruits', fruit);
}

export async function editFruitById(id, fruit) {
    return api.put('/data/fruits/' + id, fruit);
}

export async function deleteFruit(id) {
    return api.del('/data/fruits/' + id);
}

export async function searchFruit(query) {
    return api.get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}