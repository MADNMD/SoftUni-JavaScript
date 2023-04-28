import { html } from '../../node_modules/lit-html/lit-html.js';
import { editOffert, getOffertById } from '../api/data.js';

const editTempleate = (offert, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" value=${offert.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${offert.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" value=${offert.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4"
                cols="50">${offert.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${offert.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${offert.salary} />

            <button data-id=${offert._id} type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    const offert = await getOffertById(ctx.params.id);

    ctx.render(editTempleate(offert, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const offertData = {
            title: formData.get('title').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            category: formData.get('category').trim(),
            description: formData.get('description').trim(),
            requirements: formData.get('requirements').trim(),
            salary: formData.get('salary').trim(),
        }

        if (Object.values(offertData).some(field => field === '')) {
            return alert('All fields are required');
        }
        const offertId = document.querySelector('button').dataset.id;
        await editOffert(offertId, offertData);
        ctx.page.redirect(`/details/${offertId}`);
    }
}