import { post, get } from "../api/api.js";
import { setUserData, clearUserData } from "../util/utils.js";

export async function login(email, password) {

    const result = await post('/users/login', { email, password });

    const userData = {
        email: result.email,
        username: result.username,
        id: result._id,
        token: result.accessToken,
    };

    setUserData(userData);
    return result;
}

export async function register(email, username, password) {

    const result = await post('/users/register', { email, username, password });

    const userData = {
        email: result.email,
        username: result.username,
        id: result._id,
        token: result.accessToken,
    };
    setUserData(userData);
    return result;
}

export async function logout() {
    get('/users/logout');
    clearUserData();
}