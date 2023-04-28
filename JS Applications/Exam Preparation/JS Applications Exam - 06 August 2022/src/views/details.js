import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOffertById, getApplyOffertById, getMyApplyOffertId, deleteOffert, applyOffert } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTempleate = (offert, isOwner, onDelete, apply, showApplyButton, onApply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${'../' + offert.imageUrl} alt="example1" />
        <p id="details-title">${offert.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offert.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offert.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offert.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offert.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${apply}</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          ${offertControlTempleate(offert,isOwner,onDelete)}
          ${offertApplyTempleate(showApplyButton, onApply)}
            <!-- <a href="" id="edit-btn">Edit</a>
            <a href="" id="delete-btn">Delete</a> -->

            <!--Bonus - Only for logged-in users ( not authors )-->
            <!-- <a href="" id="apply-btn">Apply</a> -->
        </div>
    </div>
</section>`;

const offertControlTempleate = (offert, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a href="/edit/${offert._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
    } else {
        return null;
    }
}

const offertApplyTempleate = (showApplyButton, onApply) => {

    if (showApplyButton) {
        return html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();

    const [offert, apply, hasApply] = await Promise.all([
        getOffertById(ctx.params.id),
        getApplyOffertById(ctx.params.id),
        userData ? getMyApplyOffertId(ctx.params.id, userData.id) : null
    ]);
    // console.log(ctx.params.id);
    // console.log(userData.id)    ;
    // console.log(offert);
    // console.log(apply);
    // console.log(hasApply);

    const isOwner = userData && userData.id == offert._ownerId;
    const showApplyButton = isOwner == false && hasApply == false && userData != null;
    ctx.render(detailsTempleate(offert, isOwner, onDelete, apply, showApplyButton, onApply));

    async function onDelete(event) {
        event.preventDefault();

        const offertId = ctx.params.id;

        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await deleteOffert(offertId)
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }
    }

    async function onApply(event) {
        event.preventDefault();

        const offertId = ctx.params.id;
        // console.log(offertId);
        

        await applyOffert(offertId);
        ctx.page.redirect('/details/' + offertId);
    }
}