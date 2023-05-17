import { html } from "../../node_modules/lit-html/lit-html.js";
import { editProduct, getProductById } from "../api/data.js";

const editTemplate = (product, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Product Name" .value=${product.name}>
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" .value=${product.imageUrl}>
            <input type="text" name="category" id="product-category" placeholder="Category" .value=${product.category}>
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50">${product.description}</textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" .value=${product.price}>
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    const productById = await getProductById(ctx.params.id);
    // console.log(productById);
    ctx.render(editTemplate(productById, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const productData = {
            name: formData.get('name').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            category: formData.get('category').trim(),
            description: formData.get('description').trim(),
            price: formData.get('price').trim(),
        }

        if (Object.values(productData).some(field => field === '')) {
            return alert('All fields are arequired');
        }

        await editProduct(ctx.params.id, productData);
        event.target.reset();
        ctx.page.redirect('/details/' + ctx.params.id);
    }

}