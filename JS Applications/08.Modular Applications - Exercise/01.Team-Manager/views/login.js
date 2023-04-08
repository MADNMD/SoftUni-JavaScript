import { login } from "../auth/auth.js";
import { navigationView } from "../layout/navView.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const loginTemplate = (onLogin, errMessage) => html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onLogin} id="login-form" class="main-form pad-large">
            <div class="error">${errMessage}</div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        try {
            await login(email, password);
            navigationView();
            ctx.page.redirect('/myTeams');
        } catch (error) {
            ctx.render(loginTemplate(onLogin, error.message));
        }
    }
}