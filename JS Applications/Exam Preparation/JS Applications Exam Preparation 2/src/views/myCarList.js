import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyCarById } from "../api/data.js";
import { getUserData } from "../util.js";

const myCarListTemplate = (cars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${cars.length === 0
            ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`
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
                    <a href="/details/${car._id}" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>`)}
    </div>
</section>`;

export async function myCarListPage(ctx) {
    const userData = getUserData();
    const myCars = await getMyCarById(userData.id);
    ctx.render(myCarListTemplate(myCars));
}