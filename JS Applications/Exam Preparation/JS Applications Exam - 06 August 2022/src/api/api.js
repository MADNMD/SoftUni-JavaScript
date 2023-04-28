import { getUserData, setUserData, clearUserData } from "../util.js";

const hostname = `http://localhost:3030`;

async function request(url, option) {

    try {

        const response = await fetch(hostname + url, option);

        if (response.ok !== true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method = 'get', data) {

    const option = {
        method,
        headers: {}
    }

    if (data !== undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        option.headers['X-Authorization'] = userData.token;
    }
    return option;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    }

    setUserData(userData);
    return result;
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    }

    setUserData(userData);
    return result;
}

export async function logout() {
    get('/users/logout');
    clearUserData();
}