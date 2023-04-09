import { getMyTeams } from "../api/data.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "../util/utils.js";

const getMyTeamsTemplate = () => html`
<section id="my-teams">

    <article class="pad-med">
        <h1>My Teams</h1>
    </article>

    <article class="layout narrow">
        <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/browseTeams">Browse all teams</a> to join one, or use the button bellow to cerate your own
                team.</p>
        </div>
        <div class=""><a href="/create" class="action cta">Create Team</a></div>
    </article>

    <article class="layout">
        <img src="./assets/rocket.png" class="team-logo left-col">
        <div class="tm-preview">
            <h2>Team Rocket</h2>
            <p>Gotta catch 'em all!</p>
            <span class="details">3 Members</span>
            <div><a href="#" class="action">See details</a></div>
        </div>
    </article>
</section>`;

export async function myTeamsPage(ctx){

    const userData = getUserData();
    const myTeams = await getMyTeams(userData.id);
    console.log(myTeams);

    ctx.render(getMyTeamsTemplate(myTeams));

}