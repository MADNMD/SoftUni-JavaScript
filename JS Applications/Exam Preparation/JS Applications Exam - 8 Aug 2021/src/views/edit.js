import { html } from '../../node_modules/lit-html/lit-html.js';
import { editBook, getBookById } from '../api/data.js';
import page from '../../node_modules/page/page.mjs';

const editTempleate = (book, onEdit) => html`
<section id="edit-page" class="edit">
    <form @submit=${onEdit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${book.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="Fiction">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input data-id="${book._id}" class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {

    const book = await getBookById(ctx.params.id);
    // console.log(book);
    ctx.render(editTempleate(book, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const bookData = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            type: formData.get('type').trim(),
        }

        if (Object.values(bookData).some(element => element === '')) {
            return alert('All fields are required');
        }

        const bookId = document.querySelector('.button.submit').dataset.id;
        await editBook(bookId, bookData);
        page.redirect(`/details/${bookId}`);
    }
}