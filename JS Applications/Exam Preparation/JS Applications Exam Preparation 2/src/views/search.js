import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllCars, searchCars } from "../api/data.js";
import { getUserData } from "../util.js";

const searchTemplate = (cars, onSearch, params = '', userData) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" .value=${params} placeholder="Enter desired production year">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

        ${cars.length === 0
            ? html` <p class="no-cars"> No results.</p>`
            : cars.map(car => html`
        <div class="listing">
            <div class="preview">
                <img src=${car.imageUrl}>
            </div>
            <h2>${car.brand} ${car.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${car.year}</h3>
                    <h3>Price: ${car.price} $</h3>
                </div>
                <div class="data-buttons">
                    ${userData !== null
                    ? html` <a href="/details/${car._id}" class="button-carDetails">Details</a>`
                    : null}
                </div>
            </div>
        </div>`)}
    </div>
</section>`;

export async function searchPage(ctx) {

    const params = ctx.querystring.split('=')[1];
    const userData = getUserData();

    let cars = [];

    if (params) {
        cars = await searchCars(decodeURIComponent(params));
    } else {
        cars = await getAllCars();
    }

    ctx.render(searchTemplate(cars, onSearch, params, userData));

    async function onSearch() {

        const search = document.getElementById('search-input');

        if (search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search.value));
        }
    }
}