import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../auth/auth.js";
import { navigatinView } from "../layout/navigation.js";
import { notification } from "../views/notification.js";

const loginTemplate = (onLogin) => html`
<section id="login">
    <form @submit=${onLogin} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
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
            notification('All fields are required');
            return;
        }

        await login(email, password);
        event.target.reset();
        navigatinView();
        ctx.page.redirect('/allMemes');
    }
}