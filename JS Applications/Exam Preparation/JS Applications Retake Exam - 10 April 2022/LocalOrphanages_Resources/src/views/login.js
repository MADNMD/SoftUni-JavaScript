import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/api.js';

const loginTempleate = (onLogin) => html`
<section id="login-page" class="auth">
    <form @submit=${onLogin} id="login">
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>`;

export async function loginPage(ctx){
    ctx.render(loginTempleate(onLogin));

    async function onLogin(event){
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if(email === '' || password === ''){
            return alert('All fields are required');
        }
        await login(email, password);
        event.target.reset();
        ctx.navigationView();
        ctx.page.redirect('/catalog');
    }
}