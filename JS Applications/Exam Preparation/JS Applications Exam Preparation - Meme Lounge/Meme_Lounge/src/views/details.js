import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteMeme, getMemeById } from "../api/data.js";
import { getUserData } from "../util/util.js";

const detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${controlTemplate(meme, isOwner, onDelete)}
        </div>
    </div>
</section>`;

const controlTemplate = (meme, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a class="button warning" href="/edit/${meme._id}">Edit</a>
        <button class="button danger" @click=${onDelete}>Delete</button>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const id = ctx.params.id;

    const userData = getUserData();
    const memeById = await getMemeById(id);

    const isOwner = userData && userData.id == memeById._ownerId;

    ctx.render(detailsTemplate(memeById, isOwner, onDelete));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await deleteMeme(id);
            ctx.page.redirect('/allMemes');
        } else {
            ctx.page.redirect('/details');
        }
    }
}