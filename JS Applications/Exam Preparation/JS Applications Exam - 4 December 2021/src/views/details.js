import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteAlbum, getAlbumById } from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}/h4>
                    <h4>Price: $${album.price}</h4>
                    <h4>Date: ${album.releaseDate}</h4>
                    <p>Description: ${album.description}</p>
            </div>
            ${isOwner 
        ? html`
            <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>
            </div>`
        : null
    }
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {

    const userData = getUserData();
    const album = await getAlbumById(ctx.params.id);
    const isOwner = userData && userData.id == album._ownerId;

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete an item');

        if (confirmed) {
            await deleteAlbum(ctx.params.id);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }

    }
    ctx.render(detailsTemplate(album, isOwner, onDelete));
}