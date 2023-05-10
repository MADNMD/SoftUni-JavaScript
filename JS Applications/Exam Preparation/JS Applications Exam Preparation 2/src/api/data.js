import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllCars() {
    return api.get('/data/cars?sortBy=_createdOn%20desc');
}

export async function getCarById(id) {
    return api.get('/data/cars/' + id);
}

export async function createCar(car) {
    return api.post('/data/cars/', car);
}

export async function editCarById(id, car) {
    return api.put('/data/cars/' + id, car);
}

export async function deleteCarById(id) {
    return api.del('/data/cars/' + id);
}

export async function getMyCarById(userId) {
    return api.get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function searchCars(query) {
    return api.get(`/data/cars?where=year%3D${query}`);
}