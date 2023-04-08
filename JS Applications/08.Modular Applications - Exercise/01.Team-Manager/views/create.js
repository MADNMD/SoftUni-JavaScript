import { createTems } from "../api/data.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const createTemplate = (onCreate, errMessage) => html`
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form @submit=${onCreate} id="create-form" class="main-form pad-large">
            <div class="error">${errMessage}</div>
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>`;

export async function createPage(ctx) {

    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const createTeam = {
            name: formData.get('name').trim(),
            logoUrl: formData.get('logoUrl').trim(),
            description: formData.get('description').trim(),
        }

        try {
            if (createTeam.name.length < 4) throw new Error('Team name must be at least 4 characters long');
            if (!createTeam.logoUrl) throw new Error('This field are required');
            if (createTeam.description.length < 10) throw new Error('Description fiedl must be at least 10 characters long');

            const team = await createTems(createTeam);
            console.log(team);
            event.target.reset();
            ctx.page.redirect(`/details/${team._id}`)
        } catch (error) {
            ctx.render(createTemplate(onCreate, error.message));
        }
    }

}