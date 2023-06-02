import { getUserData } from "../util/util.js";

const hostname = 'http://localhost:3030';

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
    };

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

export async function get(url){
    return request(url, createOptions());
}

export async function post(url, data){
    return request(url, createOptions('post', data));
}

export async function put(url, data){
    return request(url, createOptions('put', data));
}

export async function del(url){
    return request(url, createOptions('delete'));
}