import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../auth/auth.js";
import { navigationView } from "../layout/navigation.js";

const registerTemplate = (onRegister) => html`
<section id="registerPage">
    <form @submit=${onRegister} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('repeatPassword').trim();

        if (email === '' || password === '' || rePassword === '') {
            return alert('All fiedls are required');
        }

        if (password !== rePassword) {
            return alert('Incorrect password');
        }

        await register(email, password);
        event.target.reset();
        navigationView();
        ctx.page.redirect('/home');
    }
}