import { html } from "../../node_modules/lit-html/lit-html.js";
import { editPetById, getPetById } from "../api/data.js";

const editTemplate = (pet, onEdit) => html`
<section id="editPage">
    <form @submit=${onEdit} class="editForm">
        <img src=${'../' + pet.image}>
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value=${pet.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value=${pet.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value=${pet.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value=${pet.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value=${pet.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const pet = await getPetById(id);

    ctx.render(editTemplate(pet, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const editPetData = {
            name: formData.get('name').trim(),
            breed: formData.get('breed').trim(),
            age: formData.get('age').trim(),
            weight: formData.get('weight').trim(),
            image: formData.get('image').trim(),
        }

        if(Object.values(editPetData).some(field => field === '')){
            return alert('All fields are required');
        }

        await editPetById(id, editPetData);
        event.target.reset();
        ctx.page.redirect('/details/' + id);
    }
}