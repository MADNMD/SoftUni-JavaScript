import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteCarById, getCarById } from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (car, isOwner, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${'../' + car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        <div class="listings-buttons">
            ${controlTemplate(car, isOwner, onDelete)}
        </div>
    </div>
</section>`;
const controlTemplate = (car, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a href="/edit/${car._id}" class="button-list">Edit</a>
        <a href="javascript:void(0)" class="button-list" @click=${onDelete}>Delete</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const id = ctx.params.id;

    const userData = getUserData();
    const car = await getCarById(id);
  
    const isOwner = userData && userData.id == car._ownerId;

    ctx.render(detailsTemplate(car, isOwner, onDelete));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('');

        if (confirmed) {
            await deleteCarById(id);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }
    }

}