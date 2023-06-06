import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFruits } from "../api/data.js";

const catalogTemplate = (fruits) => html`
<h2>Fruits</h2>
        <section id="dashboard">
          ${fruits.length === 0
    ? html`<h2>No fruit info yet.</h2>`
    : fruits.map(fruit => html`
          <div class="fruit">
            <img src=${fruit.imageUrl} alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
          </div> `)}
          </section>`;

export async function catalogPage(ctx) {

  const allFruits = await getAllFruits();
  // console.log(allFruits);
  ctx.render(catalogTemplate(allFruits));
}