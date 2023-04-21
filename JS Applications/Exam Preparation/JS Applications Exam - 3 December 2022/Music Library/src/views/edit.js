import { html } from '../../node_modules/lit-html/lit-html.js';
import { editAlbum, getAlbumsById } from '../api/data.js';

const editTempleate = (album, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${album.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" value=${album.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${album.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" value=${album.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" value=${album.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${album.sales} />

            <button data-id=${album._id} type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    const album = await getAlbumsById(ctx.params.id);

    ctx.render(editTempleate(album, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const albumData = {
            singer: formData.get('singer').trim(),
            album: formData.get('album').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            release: formData.get('release').trim(),
            label: formData.get('label').trim(),
            sales: formData.get('sales').trim(),
        }

        if (Object.values(albumData).some(field => field === '')) {
            return alert('All fields are required');
        }

        const albumId = document.querySelector('button').dataset.id;
        await editAlbum(albumId, albumData);
        ctx.page.redirect(`/details/${albumId}`);
    }
}