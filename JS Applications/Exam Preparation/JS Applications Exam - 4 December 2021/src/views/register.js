import { html } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../app.js";
import { register } from "../auth/auth.js";

const registerTemplate = (onRegister) => html`
<section id="registerPage">
    <form @submit=${onRegister}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onRegister));
    
    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('conf-pass').trim();

        if(email === '' || password === '' || rePassword === ''){
            return alert('All fields are required');
        }

        if(password !== rePassword){
            return alert('Incorrect password');
        }

        await register(email, password);
        event.target.reset();
        navigationView();
        ctx.page.redirect('/catalog');
    }
}