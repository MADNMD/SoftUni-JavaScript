import { getBookById, editBook } from "./api.js";
import { loadBooks } from "./catalog.js";

export async function showEditForm(event) {
    event.preventDefault();

    const createForm = document.getElementById('add-form');
    createForm.addEventListener('submit', getFormData);

    const editForm = document.getElementById('edit-form');

    createForm.style.display = 'none';
    editForm.style.display = 'block';

    const form = event.target.parentElement.parentElement;
    const id = event.target.parentElement.parentElement.id;
    const title = form.cells[0].textContent;
    const author = form.cells[1].textContent;

    const book = await getBookById(id, { title, author });


    editForm.querySelector('input[name=title]').value = title;
    editForm.querySelector('input[name=author]').value = author;

    editForm.addEventListener('submit', (event) => getFormData(event, id));
}


export async function getFormData(event, bookId) {
    event.preventDefault();

    const createForm = document.getElementById('add-form');
    const editForm = document.getElementById('edit-form');

    const formData = new FormData(editForm);

    const title = formData.get('title');
    const author = formData.get('author');

    if (title === '' || author === '') {
        alert('Field is empty');
        return;
    }

    await editBook(bookId, { title, author });
    editForm.reset();
    createForm.style.display = 'block';
    editForm.style.display = 'none';

    loadBooks();
}