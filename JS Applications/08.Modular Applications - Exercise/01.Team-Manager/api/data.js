import * as auth from '../auth/auth.js';
import * as api from '../api/api.js';

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getAllTeams(){
    return api.get('/data/teams');
}

export async function getAllMembers(){
    return api.get('/data/members?where=status%3D%22member%22');
}

export async function getMyTeams(userId){
    return api.get(`/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);
}

export async function getTeamById(id){
    return api.get('/data/teams/' + id);
}

export async function createTems(team){
    return api.post('/data/teams', team);
}

export async function editTeam(id, team){
    return api.put('/data/teams/' + id, team)
}
