import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../auth/auth.js";
import { navigationView } from "../layout/navigation.js";

const loginTemplate = (onLogin) => html`
<section id="login-page" class="auth">
    <form @submit=${onLogin} id="login">

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>`;

export async function loginPage(ctx){

    ctx.render(loginTemplate(onLogin));

    async function onLogin(event){
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
        ctx.page.redirect('/home');
    }
}