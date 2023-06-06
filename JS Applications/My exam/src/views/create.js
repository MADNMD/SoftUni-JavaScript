import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFruit } from "../api/data.js";

const createTemplate = (onCreate) => html`
 <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${onCreate} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>`;

export async function createPage(ctx) {

    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const fruitData = {
            name: formData.get('name').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            description: formData.get('description').trim(),
            nutrition: formData.get('nutrition').trim(),
        }

        if (Object.values(fruitData).some(field => field === '')) {
            return alert('All fields are required');
        }

        await createFruit(fruitData);
        event.target.reset();
        ctx.page.redirect('/catalog');
    }
}