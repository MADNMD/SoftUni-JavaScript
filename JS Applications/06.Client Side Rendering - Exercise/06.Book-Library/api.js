const host = `http://localhost:3030/jsonstore/collections/books/`;

async function request(method, url, data) {

    const option = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(host + url, option);

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
    }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export async function getBooks() {
    return get('');
}
export async function getBookById(id) {
    return get(id);
}
export async function createBook(bookData) {
    return post('', bookData);
}
export async function editBook(id, bookData) {
    return put(id, bookData);
}
export async function deleteBookById(id) {
    return del(id);
}