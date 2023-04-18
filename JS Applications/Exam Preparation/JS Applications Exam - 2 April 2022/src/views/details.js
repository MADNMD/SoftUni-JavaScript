import { html } from "../../node_modules/lit-html/lit-html.js";
import { deletePetById, donatePet, getDonatePetById, getDoneteMyPetById, getPetById } from "../api/data.js";
import { getUserData } from "../util/util.js";

const detailsTemplate = (pet, isOwner, onDelete, donate, showDonateBtn, onDonate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${'../' + pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4> 
                <h4 class="donation">Donation: ${donate * 100}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            <div class="actionBtn">
                ${controlsTemplate(pet, isOwner, onDelete)}
                ${donateTemplate(showDonateBtn, onDonate)}
            </div>
        </div>
    </div>
</section>`;

const controlsTemplate = (pet, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a href="/edit/${pet._id}" class="edit">Edit</a>
        <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>`
    } else {
        return null;
    }
}

const donateTemplate = (showDonateBtn, onDonate) => {

    if (showDonateBtn) {
        return html`<a href="javascript:void(0)" class="donate" @click=${onDonate}>Donate</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();
    const id = ctx.params.id;

    const [pet, donate, hasDonate] = await Promise.all([
        getPetById(id),
        getDonatePetById(id),
        userData ? getDoneteMyPetById(id, userData.id) : null
    ]);

    const isOwner = userData && userData.id == pet._ownerId;
    // console.log(isOwner);
    const showDonateBtn = isOwner == false && hasDonate == false && userData !== null;
    // console.log(showDonateBtn);
    ctx.render(detailsTemplate(pet, isOwner, onDelete, donate, showDonateBtn, onDonate));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await deletePetById(id);
            ctx.page.redirect('/home');
        } else {
            ctx.page.redirect('/details');
        }
    }

    async function onDonate(event) {
        event.preventDefault();
        await donatePet(id);
        ctx.page.redirect('/details/' + id);
    }
}