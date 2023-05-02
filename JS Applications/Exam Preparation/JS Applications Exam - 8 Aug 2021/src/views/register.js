import { html, } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/api.js';

const registerTempleate = (onRegister) => html`
<section id="register-page" class="register">
    <form @submit=${onRegister} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`;

export function registerPage(ctx) {
    ctx.render(registerTempleate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('confirm-pass').trim();

        if (email === '' || password === '' || rePassword === '') {
            return alert('All fields are required');
        }

        if (password !== rePassword) {
            return alert('Incorrect Password');
        }
        // event.target.reset();
        await register(email, password);
        ctx.navigationView();
        ctx.page.redirect('/catalog');
    }
}