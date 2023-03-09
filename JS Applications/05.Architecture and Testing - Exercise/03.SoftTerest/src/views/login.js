import { login } from "../api/data.js"; // функцията която ще говори с back-end-a
const section = document.getElementById('loginPage');
section.remove();

let ctx = null

export function showLogin(context) {
    console.log(context);
    ctx = context;
    context.showSection(section);
}

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    await login(email, password);
    form.reset();
    ctx.goTo('home');
    ctx.updateNav();
}