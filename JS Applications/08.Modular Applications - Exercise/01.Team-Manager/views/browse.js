import { getAllMembers, getAllTeams } from "../api/data.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "../util/utils.js";

const browseTemplate = (teams, userData, allMembers) => html`
<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${userData === null
        ? teams.map(team => html`
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${allMembers.length}</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>`)
    : html`
    <article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>`}
</section>`;

export async function browsePage(ctx) {

    const allTeams = await getAllTeams();
    const allMembers = await getAllMembers();
    const userData = getUserData();
    // const teamMembers = [];
    // console.log(allMembers);
    // console.log(allTeams);

    ctx.render(browseTemplate(allTeams, userData, allMembers));
}