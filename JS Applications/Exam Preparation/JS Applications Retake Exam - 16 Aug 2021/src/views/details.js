import { html } from "../../node_modules/lit-html/lit-html.js";
import { createNewComment, deleteGame, getGameById, loadingCommentByGameId } from "../api/data.js";
import { getUserData } from "../util/util.js";

const detailsTemplate = (game, isOwner, onDelete, isLogged, allComments, commentData) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${allComments.length > 0
        ? html`
            <ul>
                ${allComments.map(comment => html`
                <li class="comment">
                    <p>Content: ${comment.comment}</p>
                </li>`)}
            </ul>`
        : html` <p class="no-comment">No comments.</p>`}
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        <div class="buttons">
            ${controlTemplate(game, isOwner, onDelete)}
        </div>
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${isLogged && !isOwner ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${commentData} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`
        : null}

</section>`;

const controlTemplate = (game, isOwner, onDelete) => {

    if (isOwner) {
        return html`
        <a href="/edit/${game._id}" class="button">Edit</a>
        <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>`
    } else {
        null;
    }
}

export async function detailsPage(ctx) {

    const gameId = ctx.params.id;
    const game = await getGameById(gameId);
    // console.log(game);
    const allComments = await loadingCommentByGameId(gameId);
    // console.log(allComments);

    const userData = getUserData();
    const isOwner = userData && userData.id == game._ownerId;
    const isLogged = !userData ? false : true;

    ctx.render(detailsTemplate(game, isOwner, onDelete, isLogged, allComments, commentData));

    async function commentData(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const comment = formData.get('comment').trim();

        if (comment === '') {
            return alert('Enter your comment');
        }

        await createNewComment({ gameId, comment });
        event.target.reset();
        ctx.page.redirect('/details/' + gameId);
    }

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to delete this item');

        if (confirmed) {
            await deleteGame(gameId);
            ctx.page.redirect('/home');
        }
    }
}