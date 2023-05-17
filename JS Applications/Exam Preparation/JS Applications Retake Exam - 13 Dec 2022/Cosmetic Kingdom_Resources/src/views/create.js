import { html } from "../../node_modules/lit-html/lit-html.js";
import { createProduct } from "../api/data.js";

const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Add Product</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="name" id="name" placeholder="Product Name" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
            <input type="text" name="category" id="product-category" placeholder="Category" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50"></textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" />

            <button type="submit">Add</button>
        </form>
    </div>
</section>`;

export async function createPage(ctx){
    
    ctx.render(createTemplate(onCreate));

    async function onCreate(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const productData = {
            name: formData.get('name').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            category: formData.get('category').trim(),
            description: formData.get('description').trim(),
            price: formData.get('price').trim(),
        }

        if(Object.values(productData).some(field => field === '')){
            return alert('All fields are required');
        }

        await createProduct(productData);
        event.target.reset();
        ctx.page.redirect('/catalog');
    }
}