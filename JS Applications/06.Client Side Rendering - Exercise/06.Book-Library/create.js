import { loadBooks } from "./catalog.js";
import { createBook } from "./api.js";

export async function getFormData(event) {
    event.preventDefault();
    const form = document.getElementById('add-form');

    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');

    console.log(title);
    console.log(author);

    // if(title === '' || author === ''){
    //     alert('Field is empty');
    //     return;
    // }
    await createBook({ title, author });
    form.reset();
    loadBooks();

    if (title === '' || author === '') {
        alert('Field is empty');
        return;
    }
}