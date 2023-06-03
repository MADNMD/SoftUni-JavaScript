import { html } from "../../node_modules/lit-html/lit-html.js";
import { createTheater } from "../api/data.js";

const createTemplate = (onCreate) => html`
<section id="createPage">
    <form @submit=${onCreate} class="create-form">
        <h1>Create Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export async function createPage(ctx) {

    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const theaterData = {
            title: formData.get('title').trim(),
            date: formData.get('date').trim(),
            author: formData.get('author').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
        }

        if (Object.values(theaterData).some(field => field === '')) {
            return alert('All fields are required');
        }

        await createTheater(theaterData);
        event.target.reset();
        ctx.page.redirect('/home')
    }
}