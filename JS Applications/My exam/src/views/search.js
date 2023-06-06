import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFruits, searchFruit } from "../api/data.js";
import { getUserData } from "../util/util.js";

const searchTemplate = (fruits, onSearch, params = '', userData) => html`
 <section id="search">

<div class="form">
  <h2>Search</h2>
  <form @submit=${onSearch} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
      .value=${params}
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
    ${fruits.length === 0
        ? html`<p class="no-result">No result.</p>`
        : fruits.map(fruit => html`
     <div class="fruit">
  <img src=${fruit.imageUrl} alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>
  <a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>`)}
  </div>
        </section>`;

export async function searchPage(ctx) {

    const params = ctx.querystring.split('=')[1];
    const userData = getUserData();

    let fruits = [];

    if (params) {
        fruits = await searchFruit(decodeURIComponent(params));
    } else {
        fruits = await getAllFruits();
    }

    ctx.render(searchTemplate(fruits, onSearch, params, userData));

    async function onSearch(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const search = formData.get('search').trim();

        if (search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search));
        }
    }
}