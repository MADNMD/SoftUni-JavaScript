import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFruitById, getFruitById } from "../api/data.js";

const editTemplate = (fruit, onEdit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                .value=${fruit.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                .value=${fruit.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value=${fruit.description}
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value=${fruit.nutrition}
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const fruit = await getFruitById(id);

    ctx.render(editTemplate(fruit, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const editFruitData = {
            name: formData.get('name').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            description: formData.get('description').trim(),
            nutrition: formData.get('nutrition').trim(),
        }

        if(Object.values(editFruitData).some(field => field === '')){
          return alert('All fields are required');
        }

        await editFruitById(id, editFruitData);
        event.target.reset();
        ctx.page.redirect('/details/' + id);
    }
}