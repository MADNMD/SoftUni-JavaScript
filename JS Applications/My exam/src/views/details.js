import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteFruit, getFruitById } from "../api/data.js";
import { getUserData } from "../util/util.js";

const detailsTemplate = (fruit, isOwner, onDelete) => html`
 <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${fruit.imageUrl} alt="example1" />
            <p id="details-title">${fruit.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${fruit.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${fruit.nutrition}</p>
              </div>
               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
          ${controlTemplate(fruit, isOwner, onDelete)}
          </div>
            </div>
        </div>
      </section>`;

const controlTemplate = (fruit, isOwner, onDelete) => {

    if (isOwner) {
        return html`
             <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();
    const id = ctx.params.id;
    const fruit = await getFruitById(id);

    const isOwner = userData && userData.id == fruit._ownerId;

    ctx.render(detailsTemplate(fruit, isOwner, onDelete));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want delete this item');

        if (confirmed) {
            await deleteFruit(id);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }
    }

}