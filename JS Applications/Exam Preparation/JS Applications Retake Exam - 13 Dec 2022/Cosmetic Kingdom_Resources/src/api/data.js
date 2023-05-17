import * as auth from '../auth/auth.js'
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllProducts() {
    return api.get('/data/products?sortBy=_createdOn%20desc');
}

export async function getProductById(id) {
    return api.get('/data/products/' + id);
}

export async function createProduct(product) {
    return api.post('/data/products', product);
}

export async function editProduct(id, product) {
    return api.put('/data/products/' + id, product);
}

export async function deleteProduct(id) {
    return api.del('/data/products/' + id);
}

export async function buyProduct(productId) {
    return api.post('/data/bought', {
        productId
    });
}

export async function getBuyProductById(productId) {
    return api.get(`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`);
}

export async function getBuyMyProductById(productId, userId) {
    return api.get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}