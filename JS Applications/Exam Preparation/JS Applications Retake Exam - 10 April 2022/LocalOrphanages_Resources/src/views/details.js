import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePost, donateMaterials, getDonatePostById, getMyDonatePostById, getPostById } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTempleate = (post, isOwner, onDelete, donate, showDonateButton, onDonate) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${'../' + post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donate}</p>

                <!--Edit and Delete are only for creator-->
                <div class="btns">
                    ${postControlsTempleate(post, isOwner, onDelete)}
                    ${postDonateTempleate(showDonateButton, onDonate)}
                    <!--Bonus - Only for logged-in users ( not authors )-->
                </div>
            </div>
        </div>
    </div>
</section>`;

const postControlsTempleate = (post, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
    } else {
        return null;
    }
}

const postDonateTempleate = (showDonateButton, onDonate) => {

    if (showDonateButton) {
        return html`
        <a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>`
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();

    const [post, donate, hasDonate] = await Promise.all([
        getPostById(ctx.params.id),
        getDonatePostById(ctx.params.id),
        userData ? getMyDonatePostById(ctx.params.id, userData.id) : 0
    ]);

    const isOwner = userData && userData.id == post._ownerId;
    const showDonateButton = isOwner == false && hasDonate == false && userData != null;
    ctx.render(detailsTempleate(post, isOwner, onDelete, donate, showDonateButton, onDonate));

    async function onDelete(event) {
        event.preventDefault();

        const postId = ctx.params.id;

        const confirmed = confirm('Are you sure you want to delete this item?');
        
        if (confirmed) {
            await deletePost(postId);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details')
        }
    }

    async function onDonate(event) {
        event.preventDefault();

        const postId = ctx.params.id;

        await donateMaterials(postId);
        ctx.page.redirect('/details/' + postId);
    }
}