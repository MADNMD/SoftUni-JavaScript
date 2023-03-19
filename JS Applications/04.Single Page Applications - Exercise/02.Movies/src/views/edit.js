import { html } from '../../node_modules/lit-html/lit-html.js';
import { editMovies, getMovieById } from '../api/data.js';

const editTemplate = (movie, onEdit) => html`
<section id="edit-movie">
    <form @submit=${onEdit} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Movie Title" value=${movie.title} name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description">${movie.description}</textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value="${movie.img}" name="imageUrl">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;

export async function editPage(ctx){

    const movie = await getMovieById(ctx.params.id);
    
    ctx.render(editTemplate(movie, onEdit));

    async function onEdit(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const movieData = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            img: formData.get('imageUrl').trim()
        }

        if(Object.values(movieData).some(field => field === '')){
            return alert('All fields are required');
        }

        await editMovies(ctx.params.id, movieData);
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}