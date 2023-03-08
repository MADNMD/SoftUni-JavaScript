import { register } from "../api/data.js";

const section = document.getElementById('registerPage');
section.remove();

let ctx = null;

export function showRegister(context){
    ctx = context;
    context.showSection(section);
}

const form = section.querySelector('form');
form.addEventListener('submit', onRegister);

async function onRegister(event){
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();

    if(email === '' || password === ''){
        return alert('The field is empty');
    }

    if(password !== repeatPassword){
        return alert('Inccorect password');
    }

    await register(email, password);
    form.reset();
    ctx.goTo('home');
    ctx.updateNav();
}