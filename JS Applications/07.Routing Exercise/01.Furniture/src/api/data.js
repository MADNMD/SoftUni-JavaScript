import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllFurniture(){
    return api.get('/data/catalog');
}

export async function getMyFurniture(userId){
    return api.get(`/data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export async function getFurnitureById(id){
    return api.get('/data/catalog/' + id);
}

export async function createFurniture(furniture){
    return api.post('/data/catalog', furniture);
}

export async function editFurniture(id, furniture){
    return api.put('/data/catalog/' + id, furniture);
}

export async function deleteFurniture(id){
    return api.del('/data/catalog/' + id);
}