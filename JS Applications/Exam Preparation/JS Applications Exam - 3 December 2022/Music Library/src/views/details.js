import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteAlbum, getAlbumsById, getLikesByAlbumId, likeAlbum, getMyLikeByAlbumId } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTempleate = (album, isOwner, onDelete, likes, showLikeButton, onLike) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${'../' + album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${likeControlsTempleate(showLikeButton, onLike)}
            ${albumContorlsTempleate(album, isOwner, onDelete)}
        </div>
    </div>
</section>`;

const albumContorlsTempleate = (album, isOwner, onDelete) => {

    if (isOwner) {
        return html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`;
    } else {
        return null;
    }
}

const likeControlsTempleate = (showLikeButton, onLike) => {

    if (showLikeButton) {
        return html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();

    const [album, likes, hasLike] = await Promise.all([
        getAlbumsById(ctx.params.id),
        getLikesByAlbumId(ctx.params.id),
        userData ? getMyLikeByAlbumId(ctx.params.id, userData.id) : 0
    ]);

    const isOwner = userData && userData.id == album._ownerId;
    const showLikeButton = isOwner == false && hasLike == false && userData != null;
    ctx.render(detailsTempleate(album, isOwner, onDelete, likes, showLikeButton, onLike));

    async function onDelete() {

        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await deleteAlbum(ctx.params.id);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }
    }
    async function onLike() {
        await likeAlbum(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}