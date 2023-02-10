const table = document.querySelector('table tbody');
document.getElementById('loadBooks').addEventListener('click', loadBooks);
const createForm = document.getElementById('create-form');
const titleInput = document.querySelector('[name="title"]');
const authorInput = document.querySelector('[name="author"]');
const submitBtn = document.querySelector('form button').addEventListener('click', onCreate);
const editForm = document.getElementById('edit-form');
const saveBtn = document.getElementById('save').addEventListener('click', onSave);

loadBooks(); // като стартирам приложението автоматично зарежада данните от сървара;

async function onCreate(event) { // подавам фукцията createRow и закачаме новия ред в таблицата;
    event.preventDefault();

    if (titleInput.value === '') {
        return alert('Field "Title" is empty');
    }
    if (authorInput.value === '') {
        return alert('Field "Author" is empty');
    }

    const title = titleInput.value;
    const author = authorInput.value;

    const data = {
        author,
        title,
    }
    await createBooks(data); //подавам данните на функцията която прави POST заявката;
    table.appendChild(createRow(data._id, data)); // като въведем новото заглавие и новия автор автоматично ги закачаме в таблицата без да се презарежда страницата;
    // loadBooks(); // като въведем новото заглавие и новия автор ги закачаме към таблицата но се рефрешва станицата защото правим GET  заявка;
    titleInput.value = '';
    authorInput.value = '';
}

async function loadBooks() {
    const books = await request(`http://localhost:3030/jsonstore/collections/books`);

    const result = Object.entries(books).map(([id, book]) => createRow(id, book));
    table.replaceChildren(...result);  //замнеяме дефолтните деца с тези от сървъра. Деструкторираме го защото очаква да получи поредица от елементи а не масив'
}

function createRow(id, book) { // тази функция създава новия ред в таблица с необходимите данни;
    const row = document.createElement('tr');

    const titleCell = row.insertCell(0);
    titleCell.className = 'title';
    titleCell.textContent = book.title;

    const authorCell = row.insertCell(1);
    authorCell.className = 'name';
    authorCell.textContent = book.author;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.id = id;
    row.appendChild(editBtn);
    editBtn.addEventListener('click', editBook);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.id = id;
    row.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteRow);

    return row; // връщам новосъсдадения ред
}

async function onSave(event) { // тази функция обновява редактираната книга
    event.preventDefault();

    const form = event.target.parentElement;
    const id = form[0]
    const title = form[1];
    const author = form[2];

    const data = {
        author: author.value,
        title: title.value,
    }

    const result = await updateBooks(id.value, data); // тук подавам данните на фукцията която прави PUT заявката;

    loadBooks();

    createForm.style.display = 'block';
    editForm.style.display = 'none';
}

async function editBook(event) {  // това е функцията която слуша на edin button

    const id = event.target.id;
    const book = await loadBookById(id);

    createForm.style.display = 'none';
    editForm.style.display = 'block';

    const hiddenField = document.getElementById('hidden');//правим скрито поле за можем да пазим ID-то;
    hiddenField.value = id;
    const editTitle = document.getElementById('title');
    editTitle.value = book.title;
    const editAuthor = document.getElementById('author');
    editAuthor.value = book.author;
}

async function loadBookById(id) {  // тази функция зарежда една индивидуална книга която исакме да едитнем;
    const book = await request(`http://localhost:3030/jsonstore/collections/books/${id}`);
    return book;
}

async function deleteRow(event) { // тук трием реда от таблицата;

    const id = event.target.id; // взимам ID-то

    await deleteBooks(id); // викам фукцията която прави DELETE  зявката и подавам ID-то;

    loadBooks(); // обновявам станицата;
}

async function createBooks(book) { // тук създаввм POST  заявката;

    const option = {
        method: 'post',
        body: JSON.stringify(book),
    }

    const createBook = await request(`http://localhost:3030/jsonstore/collections/books`, option);

    return createBook;
}

async function updateBooks(id, book) { // тук създавам PUT зяваката;

    const option = {
        method: 'put',
        body: JSON.stringify(book),
    }

    const updateBook = await request(`http://localhost:3030/jsonstore/collections/books/${id}`, option);

    return updateBook;
}

async function deleteBooks(id) { // тук създавам DELETE  заявката

    const option = {
        method: 'delete',
    }

    const deleteBook = await request(`http://localhost:3030/jsonstore/collections/books/${id}`, option);

    return deleteBook;
}

async function request(url, option) { // тук създавам GET  заявакта и правим шаблон за останалите заявки;

    const response = await fetch(url, option);

    if (option && option.body !== undefined) {
        Object.assign(option, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    if (response.ok !== true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();

    return data;
}