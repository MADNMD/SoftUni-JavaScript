import { html } from '../../node_modules/lit-html/lit-html.js';
import { createAlbum } from '../api/data.js';

const addAlbumTempleate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function createAlbumPage(ctx) {
    ctx.render(addAlbumTempleate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const userData = {
            singer: formData.get('singer').trim(),
            album: formData.get('album').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            release: formData.get('release').trim(),
            label: formData.get('label').trim(),
            sales: formData.get('sales').trim(),
        }

        if (Object.values(userData).some(field => field === '')) {
            return alert('All fields are required');
        }
        createAlbum(userData);
        ctx.page.redirect('/catalog');
    }
}