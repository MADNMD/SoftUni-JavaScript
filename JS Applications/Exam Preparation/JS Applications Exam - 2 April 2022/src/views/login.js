import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../auth/auth.js";
import { navigationView } from "../layout/navigation.js";

const loginTemplate = (onLogin) => html`
<section id="loginPage">
    <form @submit=${onLogin} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
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
        ctx.page.redirect('/home');
    }
}