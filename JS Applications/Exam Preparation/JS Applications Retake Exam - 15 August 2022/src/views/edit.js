import { html } from '../../node_modules/lit-html/lit-html.js';
import { editShoes, getShoesById } from '../api/data.js';

const editTempleate = (shoes, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoes.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoes.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoes.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoes.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoes.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoes.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    const shoesId = ctx.params.id;
    const shoes = await getShoesById(shoesId);

    ctx.render(editTempleate(shoes, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const userData = {
            brand: formData.get('brand').trim(),
            model: formData.get('model').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            release: formData.get('release').trim(),
            designer: formData.get('designer').trim(),
            value: formData.get('value').trim()
        };

        if (Object.values(userData).some(field => field === '')) {
            return alert('All fields are required');
        }

        await editShoes(shoesId, userData);
        ctx.page.redirect('/catalog');
    }
    // console.log(shoesId);
    // console.log(shoes);
}