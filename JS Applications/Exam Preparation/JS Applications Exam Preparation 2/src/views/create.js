import { html } from "../../node_modules/lit-html/lit-html.js";
import { createCar } from "../api/data.js";

const createTemplate = (onCreate) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onCreate} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;

export async function createPage(ctx) {

    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const carData = {
            brand: formData.get('brand').trim(),
            model: formData.get('model').trim(),
            description: formData.get('description').trim(),
            year: Number(formData.get('year').trim()),
            imageUrl: formData.get('imageUrl').trim(),
            price: Number(formData.get('price').trim()),
        }
console.log(carData);
        if (Object.values(carData).some(field => field === '')) {
            return alert('All fields are required');
        }

        if (Number(carData.year) < 0) {
            return alert('Invalid year');
        }
        if (Number(carData.price) < 0) {
            return alert('Invalid price');
        }

        await createCar(carData);
        ctx.page.redirect('/catalog');
    }
}