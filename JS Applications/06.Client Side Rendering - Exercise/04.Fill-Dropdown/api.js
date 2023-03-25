async function checkToJson(response) {
    if (response.ok !== true) {
        throw new Error(response.status);
    }

    return await response.json();
}

async function getRequets() {

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');

    return await checkToJson(response);
}

async function postRequest(data) {

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', option);

    return await checkToJson(response);
}

export { getRequets, postRequest };