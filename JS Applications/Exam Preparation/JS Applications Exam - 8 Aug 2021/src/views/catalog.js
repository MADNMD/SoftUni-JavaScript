import { html } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { getAllBooks } from '../api/data.js';

const catalogTempleate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
        ${books.length === 0
        ? html` <p class="no-books">No books in database!</p>`
        : books.map(book => html`
        <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <a class="button" href="/details/${book._id}">Details</a>
        </li>`)}
    </ul>
</section>`;

export async function catalogPage(ctx) {

    const books = await getAllBooks();
    ctx.render(catalogTempleate(books));
}