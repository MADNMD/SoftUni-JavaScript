import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc');
}

export async function get3Games(){
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function createGames(game) {
    return api.post('/data/games', game);
}

export async function getGameById(id) {
    return api.get('/data/games/' + id);
}

export async function editGame(id, game) {
    return api.put('/data/games/' + id, game);
}

export async function deleteGame(id) {
    return api.del('/data/games/' + id);
}

export async function createNewComment(data) {
    return api.post('/data/comments', data);
}

export async function loadingCommentByGameId(gameId) {
    return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}