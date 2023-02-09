const url = `http://localhost:3030/jsonstore/phonebook`;
const contactList = document.getElementById('phonebook');
const person = document.getElementById('person');
const phone = document.getElementById('phone');
const loadBtn =  document.getElementById('btnLoad')
const createBtn =  document.getElementById('btnCreate')

function attachEvents() {
    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);
}

async function onCreate(){

    if(person.value === ''){
        alert('The field "Person" is empty');
        return
    }
    if(phone.value === ''){
        alert('The field "Phone" is empty');
        return;
    }

    await postData();

    person.value = '';
    phone.value = '';
    
    loadBtn.click();
}

async function onLoad() {

    contactList.innerHTML = '';
    const contacts = await getData();

    contacts.forEach(contact => {
        const liElement = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);
        liElement.textContent = `${contact.person}: ${contact.phone}`;
        liElement.setAttribute('id',contact._id);
        liElement.appendChild(deleteBtn);
        contactList.appendChild(liElement);
    });
}

async function onDelete(event){

    const id = event.target.parentNode.id;
    event.target.parentNode.remove();

    await deleteData(id);
}

async function getData() {

    const response = await fetch(url);
    const data = await response.json();

    return Object.values(data);
}

async function postData() {

    const data = {
        person: person.value,
        phone: phone.value,
    }

    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    await fetch(url, option);
}

async function deleteData(id) {

    const option = {
        method: 'delete',

    }
    const response = await fetch(`${url}/${id}`, option);
}

attachEvents();