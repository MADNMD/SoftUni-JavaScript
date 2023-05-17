import { html } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../app.js";
import { login } from "../auth/auth.js";

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate(onLogin));

    async function onLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if(email === '' || password === ''){
            return alert('All fields are required');
        }

        await login(email, password);
        event.target.reset();
        navigationView();
        ctx.page.redirect('/catalog');
    }
}