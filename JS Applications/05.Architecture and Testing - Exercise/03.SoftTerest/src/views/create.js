import { createIdea } from "../api/data.js";

const section = document.getElementById('createPage');
section.remove();

const form = document.querySelector('form');
form.addEventListener('submit', onCreate);

let ctx = null;

export function showCreate(context) {
    ctx = context;
    context.showSection(section);
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const discription = formData.get('description').trim();
    const img = formData.get('imageURL').trim();

    if (title.length < 6) {
        return alert('Title must be at least 6 characters long');
    }
    if (discription.length < 10) {
        return alert('Description must be at least 10 characters long');
    }
    if (img.length < 5) {
        return alert('Image URL must be at least 5 characters long');
    }

    createIdea({ title, discription, img });
    form.reset();
    ctx.goTo('catalog');
}