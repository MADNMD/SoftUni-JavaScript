import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../auth/auth.js";
import { navigationView } from "../layout/navigation.js";

const registerTemplate = (onRegister) => html`
<section id="register-page" class="content auth">
    <form @submit=${onRegister} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('confirm-password').trim();

        if(email === '' || password === '' || rePassword === ''){
            return alert('All fields are required');
        }

        if(password !== rePassword){
            return alert('Incorrect password');
        }

        await register(email, password);
        event.target.reset();
        navigationView();
        ctx.page.redirect('/home');
    }
}