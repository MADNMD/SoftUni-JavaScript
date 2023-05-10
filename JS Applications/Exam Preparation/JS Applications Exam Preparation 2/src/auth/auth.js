import { get, post } from "../api/api.js";
import { clearUserData, setUserData } from "../util.js";

export async function login(username, password) {
    const result = await post('/users/login', { username, password });

    const userData = {
        username: result.username,
        id: result._id,
        token: result.accessToken
    }

    setUserData(userData);
    return result;
}

export async function register(username, password) {
    const result = await post('/users/register', { username, password });

    const userData = {
        username: result.username,
        id: result._id,
        token: result.accessToken,
    }
    setUserData(userData);
    return result;
}

export async function logout() {
    await get('/users/logout');
    clearUserData();
}