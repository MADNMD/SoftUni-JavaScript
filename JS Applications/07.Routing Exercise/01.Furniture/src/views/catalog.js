import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFurniture } from "../api/data.js";

const catalogTemplate = (furniture) => html`
<div class="col-md-12">
    <h1>Welcome to Furniture System</h1>
    <p>Select furniture from the catalog to view details.</p>
</div>
<div class="row space-top">
    ${furniture.length === 0
    ? html`<h3>Furniture list is empty</h3>`
    : furniture.map(f => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${'./' + f.img} />
                <p>${f.description}</p>
                <footer>
                    <p>Price: <span>${f.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${f._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`)}
</div>`;

export async function catalogPage(ctx) {

    const allFurniture = await getAllFurniture();
    // console.log(allFurniture);
    ctx.render(catalogTemplate(allFurniture));
}