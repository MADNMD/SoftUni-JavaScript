import { html } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../app.js";
import { login } from "../auth/auth.js";

const loginTemplate = (onLogin) => html`
<section id="loginPage">
    <form @submit=${onLogin}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate(onLogin));
 
    async function onLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email === '' || password === '') {
            return alert('All fields are required');
        }

        await login(email, password);
        event.target.reset();
        navigationView();
        ctx.page.redirect('/catalog');
    }
}