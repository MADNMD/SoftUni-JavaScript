import { html } from "../../node_modules/lit-html/lit-html.js";
import { navigatinView } from "../app.js";
import { register } from "../auth/auth.js";

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="container">
        <form @submit=${onRegister} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('repeatPass').trim();

        if(username === '' || password === '' || rePassword === ''){
            return alert('All fields are required');
        }

        if(password !== rePassword){
            return alert('Incorrect password');
        }

        await register(username, password);
        navigatinView();
        ctx.page.redirect('/catalog');
    }
}