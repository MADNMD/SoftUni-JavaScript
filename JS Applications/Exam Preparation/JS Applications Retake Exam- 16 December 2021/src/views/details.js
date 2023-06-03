import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteTheatre, getLikeMyTheatreById, getLikeTheatreById, getTheaterById, likeTheatre } from "../api/data.js";
import { getUserData } from "../util/util.js";

const detailsTemplate = (theatre, isOwner, onDelete, like, showLikeBtn, onLike,hasLike) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theatre.title}</h1>
            <div>
                <img src=${theatre.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theatre.description}</p>
            <h4>Date: ${theatre.date}</h4>
            <h4>Author: ${theatre.author}</h4>
            <div class="buttons">
                ${controlTemplate(theatre, isOwner, onDelete)}
                ${controlLikeTemplate(showLikeBtn, onLike, hasLike)}
            </div>
            <p class="likes">Likes: ${like}</p>
        </div>
    </div>
</section>`;

const controlTemplate = (theatre, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a class="btn-delete" href="javascript:void(0)" @click=${onDelete}>Delete</a>
        <a class="btn-edit" href="/edit/${theatre._id}">Edit</a>`
    } else {
        return null;
    }
}

const controlLikeTemplate = (showLikeBtn, onLike, hasLike) => {

    if (showLikeBtn && ! hasLike) {
        return html`<a class="btn-like" href="javascript:void(0)" @click=${onLike}>Like</a>`
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();
    const id = ctx.params.id;

    const [theatre, like, hasLike] = await Promise.all([
        getTheaterById(id),
        getLikeTheatreById(id),
        userData ? getLikeMyTheatreById(id, userData.id) : null
    ]);

    const isOwner = userData && userData.id == theatre._ownerId;
    const showLikeBtn = isOwner == false && hasLike == false && userData !== null;
    
    ctx.render(detailsTemplate(theatre, isOwner, onDelete, like, showLikeBtn, onLike, hasLike));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this item');

        if (confirmed) {
            await deleteTheatre(id);
            ctx.page.redirect('/profile');
        }
    }

    async function onLike(event) {
        event.preventDefault();
       
        await likeTheatre(id);
        ctx.page.redirect('/details/' + id);
    }
}