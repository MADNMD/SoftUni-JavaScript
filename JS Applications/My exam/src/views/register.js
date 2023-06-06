import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../auth/auth.js";
import { navigationView } from "../layout/navigation.js";

const registerTemplate = (onRegister) => html`
 <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onRegister} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('re-password').trim();

        if (email === '' || password === '' || rePassword === '') {
            return alert('All fields are required');
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