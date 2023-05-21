import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoes, getShoesById } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTempleate = (shoes, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoes.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoes.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoes.release}</span></p>
            <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
            <p>Value: <span id="details-value">${shoes.value}</span></p>
        </div>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${shoesControlTepleate(shoes, isOwner, onDelete)}
        </div>
    </div>
</section>`;

const shoesControlTepleate = (shoes, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} data-id=${shoes._id} href="javascript:void(0)" id="delete-btn">Delete</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const shoesId = ctx.params.id;
    const shoes = await getShoesById(shoesId);
    const userData = getUserData();

    // console.log(userData);
    // console.log(shoes);
    const isOwner = userData && userData.id == shoes._ownerId;
    // console.log(isOwner);
    ctx.render(detailsTempleate(shoes,  isOwner, onDelete));

    async function onDelete(event) {
        event.preventDefault();

        const shoesId = event.target.dataset.id;

        const confirmed = confirm('Are you sure you want to delete an item');

        if (confirmed) {
            await deleteShoes(shoesId);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }
    }
}




// const detailsTempleate = (shoes, usedData, onDelete) => html`
// <section id="details">
//     <div id="details-wrapper">
//         <p id="details-title">Shoe Details</p>
//         <div id="img-wrapper">
//             <img src=${shoes.imageUrl} alt="example1" />
//         </div>
//         <div id="info-wrapper">
//             <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
//             <p>
//                 Model: <span id="details-model">${shoes.model}</span>
//             </p>
//             <p>Release date: <span id="details-release">${shoes.release}</span></p>
//             <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
//             <p>Value: <span id="details-value">${shoes.value}</span></p>
//         </div>

//         <!--Edit and Delete are only for creator-->
//         <div id="action-buttons">
//             <a href="/edit/${shoes._id}" id="edit-btn" style="display:${shoes._ownerId === usedData.id ? 'inline' : 'none'}">Edit</a>
//             <a href="javascript:void(0)" data-id=${shoes._id} id="delete-btn" style="display:${shoes._ownerId === usedData.id ? 'inline' : 'none'}" @click=${onDelete}>Delete</a>
//         </div>
//     </div>
// </section>`;