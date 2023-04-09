import { register } from "../auth/auth.js";
import { navigationView } from "../layout/navView.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const registerTemplate = (onRegister, errMessage) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onRegister} id="register-form" class="main-form pad-large">
            <div class="error">${errMessage}</div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('repass').trim();

        if (email === '' || username === '' || password === '' || rePassword === '') {
            ctx.render(registerTemplate(onRegister, 'All fields are required'));
        }
        if (password !== rePassword) {
            ctx.render(registerTemplate(onRegister, 'Password don/`t matcg'));
        }

        try {
            await register(email, username, password);
            event.target.reset();
            navigationView();
            ctx.page.redirect('/myTeams');
        } catch (error) {
            ctx.render(registerTemplate(onRegister, error.message));
        }
    }
}