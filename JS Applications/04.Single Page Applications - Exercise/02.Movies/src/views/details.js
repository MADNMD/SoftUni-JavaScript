import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteMovie, getLikeMovieById, getMovieById, getMyLikeMovieById, likeById } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (movie, isOwner, onDelete, like, showLikeButton, onLike) => html`
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src=${movie.img} alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${movie.description}</p>
                ${movieControlsTemplate(movie, isOwner, onDelete)}
                ${movieLikeTemplate(showLikeButton, onLike)}
                <span class="enrolled-span">Liked ${like}</span>
            </div>
        </div>
    </div>
</section>`;

function movieControlsTemplate(movie, isOwner, onDelete) {

    if (isOwner) {
        return html`
        <a class="btn btn-danger" href="javascript:void(0)" @click=${onDelete}>Delete</a>
        <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>`
    } else {
        return null;
    }
}

function movieLikeTemplate(showLikeButton, onLike) {

    if (showLikeButton) {
        return html`
        <a class="btn btn-primary" href="javascript:void(0)" @click=${onLike}>Like</a>`
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();

    const [movie, like, hasLike] = await Promise.all([
        getMovieById(ctx.params.id),
        getLikeMovieById(ctx.params.id),
        userData ? getMyLikeMovieById(ctx.params.id, userData.id) : 0
    ]);

    const isOwner = userData && userData.id == movie._ownerId;
    const showLikeButton = isOwner == false && hasLike == false && userData != null;
    ctx.render(detailsTemplate(movie, isOwner, onDelete, like, showLikeButton, onLike));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this item');

        if (confirmed) {
            deleteMovie(ctx.params.id);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }
    }

    async function onLike(event) {
        event.preventDefault();

        await likeById(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }

}