import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllPets() {
    return api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getPetById(id) {
    return api.get('/data/pets/' + id);
}

export async function createPet(pet) {
    return api.post('/data/pets', pet);
}

export async function editPetById(id, pet) {
    return api.put('/data/pets/' + id, pet);
}

export async function deletePetById(id) {
    return api.del('/data/pets/' + id);
}

export async function donatePet(petId) {
    return api.post('/data/donation', {
        petId
    });
}

export async function getDonatePetById(petId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function getDoneteMyPetById(petId, userId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}