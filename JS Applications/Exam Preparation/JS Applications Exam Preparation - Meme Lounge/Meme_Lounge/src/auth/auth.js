import { post, get } from "../api/api.js";
import { clearUserData, setUserData } from "../util/util.js";

export async function login(email, password) {

    const result = await post('/users/login', { email, password });

    const userData = {
        username: result.username,
        email: result.email,
        id: result._id,
        token: result.accessToken,
    }

    setUserData(userData);
    return result;
}

export async function register(username, email, password, gender) {

    const result = await post('/users/register', { username, email, password, gender });

    const userData = {
        username: result.username,
        email: result.email,
        id: result._id,
        token: result.accessToken,
        gender: result.gender,
    }

    setUserData(userData);
    return result;
}

export async function logout() {
    get('/users/logout');
    clearUserData();
}