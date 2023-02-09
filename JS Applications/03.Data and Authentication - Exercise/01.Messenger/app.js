const nameInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');
const textarea = document.getElementById('messages');

function attachEvents() {

    document.getElementById('submit').addEventListener('click', onSumbmit);
    document.getElementById('refresh').addEventListener('click', onRefresh);

}
attachEvents();

async function onSumbmit() {

    if (nameInput.value === '' || contentInput.value === '') {
        alert('The field is not filled');
        return;
    }

    await postData();

    nameInput.value = '';
    contentInput.value = '';
}

async function onRefresh() {

    const allData = await getData();
    textarea.value = allData.map(({ author, content }) => `${author}: ${content}`).join('\n');
}

async function postData() {

    const data = {
        author: nameInput.value,
        content: contentInput.value,
    }

    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }

    await fetch(`http://localhost:3030/jsonstore/messenger`, option);
}

async function getData() {

    const response = await fetch(`http://localhost:3030/jsonstore/messenger`);
    const data = await response.json();

    return Object.values(data);
}