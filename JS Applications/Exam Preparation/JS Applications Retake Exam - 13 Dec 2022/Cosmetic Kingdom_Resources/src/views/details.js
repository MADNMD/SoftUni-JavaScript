import { html } from "../../node_modules/lit-html/lit-html.js";
import { buyProduct, deleteProduct, getBuyMyProductById, getBuyProductById, getProductById } from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (product, isOwner, onDelete, buy, showBuyButton, onBuy) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${'../' + product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${buy}</span>times.</h4>
                <span>${product.description}</span>
            </div>
        </div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${productControlTemplate(product, isOwner, onDelete)}
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${productBuyTemplate(showBuyButton, onBuy)}
        </div>
    </div>
</section>`;

const productControlTemplate = (product, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a href="/edit/${product._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>`;
    } else {
        return null;
    }
}

const productBuyTemplate = (showBuyButton, onBuy) => {

    if (showBuyButton) {
        return html`<a href="javascript:void(0)" id="buy-btn" @click=${onBuy}>Buy</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {

    const userData = getUserData();

    const [product, buy, hasBuy] = await Promise.all([
        getProductById(ctx.params.id),
        getBuyProductById(ctx.params.id),
        userData ? getBuyMyProductById(ctx.params.id, userData.id) : 0
    ]);
    // console.log(product);
    // console.log(buy);
    // console.log(hasBuy);

    const isOwner = userData && userData.id == product._ownerId;
    // console.log(isOwner);
    const showBuyButton = isOwner == false && hasBuy == false && userData != null;
    // console.log(showBuyButton);
    ctx.render(detailsTemplate(product, isOwner, onDelete, buy, showBuyButton, onBuy));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await deleteProduct(ctx.params.id);
            ctx.page.redirect('/catalog');
        } else {
            ctx.page.redirect('/details');
        }
    }

    async function onBuy(event) {
        event.preventDefault();
        const productId = ctx.params.id;
        await buyProduct(productId);
        ctx.page.redirect('/details/' + productId);
    }
}