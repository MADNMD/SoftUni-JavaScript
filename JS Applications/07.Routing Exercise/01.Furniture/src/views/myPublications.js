import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyFurniture } from "../api/data.js";
import { getUserData } from "../util.js";

const myPublicationsTemplate = (myFurniture) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${myFurniture.length === 0
        ? html`<h2>You have no posts mad</h2>`
        : myFurniture.map(furniture => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${furniture.img} />
                <p>${furniture.description}</p>
                <footer>
                    <p>Price: <span>${furniture.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`)}
</div>`;

export async function myPublicationsPage(ctx) {

    const userData = getUserData();
    const myFurniture = await getMyFurniture(userData.id);
    // console.log(myFurniture);
    ctx.render(myPublicationsTemplate(myFurniture));
}