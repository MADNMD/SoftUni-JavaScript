import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/api.js';

const registerTemplate = (onRegister) => html`
<section id="form-sign-up">
    <form @submit=${onRegister} class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
                name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('repeatPassword').trim();

        if (email === '' || password === '' || rePassword === '') {
            return alert('All fields are requirerd');
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