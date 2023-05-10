import { html } from "../../node_modules/lit-html/lit-html.js";
import { editCarById, getCarById } from "../api/data.js";

const editTemplate = (car, onEdit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onEdit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    const id = ctx.params.id;

    const car = await getCarById(id);

    ctx.render(editTemplate(car, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const editCarData = {
            brand: formData.get('brand').trim(),
            model: formData.get('model').trim(),
            description: formData.get('description').trim(),
            year: Number(formData.get('year').trim()),
            imageUrl: formData.get('imageUrl').trim(),
            price: Number(formData.get('price').trim()),
        }

        if(Object.values(editCarData).some(field => field === '')){
            return alert('All fields are required');
        }

        if (editCarData.year < 0) {
            return alert('Invalid year');
        }
        if (editCarData.price < 0) {
            return alert('Invalid price');
        }

        await editCarById(id, editCarData);
        ctx.page.redirect('/details/' + id);
    }
}