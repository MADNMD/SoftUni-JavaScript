import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMemeById, getMemeById } from "../api/data.js";
import { notification } from "../views/notification.js";

const editTemplate = (editMeme, onEdit) => html`
<section id="edit-meme">
    <form @submit=${onEdit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${editMeme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${editMeme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${editMeme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export async function editPage(ctx){

    const id = ctx.params.id;

    const editMeme = await getMemeById(id);

    ctx.render(editTemplate(editMeme, onEdit));

    async function onEdit(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const editMeme = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
        }

        if(Object.values(editMeme).some(field => field === '')){
            notification('All fields are required')
            return;
        }

        await editMemeById(id, editMeme);
        event.target.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}