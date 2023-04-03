import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFurniture, getFurnitureById } from "../api/data.js";

const editTeplate = (furnitureById, onEdit) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onEdit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" value="${furnitureById.make}">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model" value="${furnitureById.model}">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year" value="${furnitureById.year}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description"
                    value="${furnitureById.description}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" value="${furnitureById.price}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" value="${furnitureById.img}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material"
                    value="${furnitureById.material}">
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`;

export async function editPage(ctx) {

    const furnitureById = await getFurnitureById(ctx.params.id);

    ctx.render(editTeplate(furnitureById, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const make = document.getElementById('new-make');
        const model = document.getElementById('new-model');
        const year = document.getElementById('new-year');
        const description = document.getElementById('new-description');
        const price = document.getElementById('new-price');
        const img = document.getElementById('new-image');
        const material = document.getElementById('new-material');

        let isValid = true;

        make.value.length >= 4 ? validate(make, true) : validate(make, false);
        model.value.length >= 4 ? validate(model, true) : validate(model, false);
        Number(year.value) >= 1950 && Number(year.value) <= 2050 ? validate(year, true) : validate(year, false);
        description.value.length >= 10 ? validate(description, true) : validate(description, false);
        Number(price.value) >= 0 ? validate(price, true) : validate(price, false);
        img.value !== '' ? validate(img, true) : validate(img, false);


        function validate(element, bool) {
            if (!bool) {
                isValid = false;
                element.classList.add('is-invalid');
                element.classList.remove('is-valid');
            } else {
                element.classList.add('is-valid');
                element.classList.remove('is-invalid');
            }
        }
        // console.log(isValid);
        if (isValid !== true) {
            return
        }

        await editFurniture(ctx.params.id, {
            make: make.value,
            model: model.value,
            year: year.value,
            description: description.value,
            price: price.value,
            img: img.value,
            material: material.value,
        });
        ctx.page.redirect('/catalog');
    }
}