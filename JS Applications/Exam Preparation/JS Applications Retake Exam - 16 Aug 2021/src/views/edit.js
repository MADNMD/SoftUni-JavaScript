import { html } from "../../node_modules/lit-html/lit-html.js";
import { editGame, getGameById } from "../api/data.js";

const editTemplate = (game, onEdit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onEdit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export async function editPage(ctx) {

    const gameId = ctx.params.id;
    const game = await getGameById(gameId);
   
    console.log(gameId);
    console.log(game);

    ctx.render(editTemplate(game, onEdit));

    async function onEdit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const gameData = {
            title: formData.get('title').trim(),
            category: formData.get('category').trim(),
            maxLevel: formData.get('maxLevel').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            summary: formData.get('summary').trim(),
        }

        if(Object.values(gameData).some(field => field === '')){
            return alert('All fiedls are required');
        }

        await editGame(gameId, gameData);
        event.target.reset();
        ctx.page.redirect('/details/' + gameId);
    }
}