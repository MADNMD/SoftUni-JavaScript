import { html } from "../../node_modules/lit-html/lit-html.js";
import { editTheatre, getTheaterById } from "../api/data.js";

const editTemplate = (theater, onEdit) => html`
<section id="editPage">
    <form @submit=${onEdit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value=${theater.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${theater.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value=${theater.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description"
                placeholder="Description" .value=${theater.description}></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                .value=${theater.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const theater = await getTheaterById(id);

    ctx.render(editTemplate(theater, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const editTheatreData = {
            title: formData.get('title').trim(),
            date: formData.get('date').trim(),
            author: formData.get('author').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
        }

        if (Object.values(editTheatreData).some(field => field === '')) {
            return alert('All fields are required');
        }

       await editTheatre(id, editTheatreData);
        event.target.reset();
        ctx.page.redirect('/details/' + id);
    }
}