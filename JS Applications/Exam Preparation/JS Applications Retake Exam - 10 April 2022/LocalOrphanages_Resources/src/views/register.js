import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/api.js';

const registerTempleate = (onRegister) => html`
<section id="register-page" class="auth">
    <form @submit=${onRegister} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTempleate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('repeatPassword').trim();

        if (email === '' || password === '' || rePassword === '') {
            return alert('All fields are required');
        }

        if (password !== rePassword) {
            return alert('Incorrect password');
        }

        await register(email, password);
        event.target.reset();
        ctx.navigationView();
        ctx.page.redirect('/catalog');
    }
}