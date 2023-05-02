import { html } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { getUserData } from '../util.js';
import { getBookById } from '../api/data.js';
import { deleteBook } from '../api/data.js';

const detailsTempleate = (book,userId) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${'../' + book.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <a class="button" href="/edit/${book._id}" style="display:${book._ownerId === userId ? 'inline' : 'none'}">Edit</a>
            <a class="button" data-id="${book._id}" href="#" style="display:${book._ownerId === userId ? 'inline' : 'none'}" @click=${onDelete}>Delete</a>

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a  class="button" href="#">Like</a>

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

async function onDelete(event) {
    event.preventDefault();

    const book = event.target;
    const bookId = book.dataset.id;
  
    const confirmed = confirm('Are you sure you want to delete this item?');

    if (confirmed) {
        await deleteBook(bookId)
    }
    page.redirect('/catalog');
}

export async function detailsPage(ctx) {

    const userData = getUserData();
    const userId = userData.id;
    // console.log(userId);

    const book = await getBookById(ctx.params.id);
    // console.log(book);

    // console.log(ctx.params.id);
    ctx.render(detailsTempleate(book, userId));
}



{/* <a  class="button" href="#" style="display:${book._ownerId === userId ? 'none' : 'inline'}">Like</a> */}
