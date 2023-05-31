import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllGames } from "../api/data.js";

const allGamesTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${games.length === 0
    ? html` <h3 class="no-articles">No articles yet</h3>`
    : games.map(game => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src=${game.imageUrl}>
            <h6>Action</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>`)}
</section>`;

export async function allGamesPage(ctx) {
    const allGames = await getAllGames();
    ctx.render(allGamesTemplate(allGames));
}