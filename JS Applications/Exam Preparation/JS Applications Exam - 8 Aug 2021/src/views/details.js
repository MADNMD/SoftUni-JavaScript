import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteBook, getBookById, getLikesByBookId, getMyLikesByBookId, likeBook } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTempleate = (book, isOwner, onDelete, likes, showLikeButton, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${'../' + book.imageUrl}></p>
        <div class="actions">
            ${bookControlsTemplates(book, isOwner, onDelete)}
            ${likesControlsTemplates(showLikeButton, onLike)}
            <div class="likes">
                <img class="hearts" src="../images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

const bookControlsTemplates = (book, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;
    } else {
        return null;
    }
}

const likesControlsTemplates = (showLikeButton, onLike) => {

    if (showLikeButton) {
        return html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();

    const [book, likes, hasLike] = await Promise.all([
        getBookById(ctx.params.id),
        getLikesByBookId(ctx.params.id),
        userData ? getMyLikesByBookId(ctx.params.id, userData.id) : 0
    ]);

    const isOwner = userData && userData.id == book._ownerId;
    const showLikeButton = isOwner == false && hasLike == false && userData != null;
    ctx.render(detailsTempleate(book, isOwner, onDelete, likes, showLikeButton, onLike));

    async function onDelete() {

        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/catalog');
        }else{
            ctx.page.redirect('/details');
        }
    }

    async function onLike() {
        await likeBook(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}