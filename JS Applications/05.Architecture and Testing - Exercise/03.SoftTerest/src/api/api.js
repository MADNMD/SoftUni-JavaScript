const host = 'http://localhost:3030';

async function request(url, option) {

    try {

        const response = await fetch(host + url, option);

        if (response.ok !== true) {

            if (response.status === 403) {
                sessionStorage.removeItem('userData');
            }

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
    }
}

function createOptions(method = 'get', data) {

    let option = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData !== null) {
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
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout() {

    await get('/users/logout');

    sessionStorage.removeItem('userData');
}

export async function register(email, password) {

    const result = await post('/users/logout', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    }
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

// window.api = {
//     request,
//     post,
//     put,
//     del,
//     login,
//     logout,
// }