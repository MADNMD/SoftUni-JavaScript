import { homePage } from "./home.js";
import { showView } from "./util.js";

const createrSection = document.getElementById('add-movie');
const form = createrSection.querySelector('form').addEventListener('submit', onRegister);
const userData = JSON.parse(sessionStorage.getItem('userData'));

export function createPage() {
    showView(createrSection);
}


async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');

    await createMovie(title, description, img);
    // form.rest();
    // event.currentTarget.reset();
    // event.target.reset();
    homePage();
}

async function createMovie(title, description, img) {

    const user = {
        title,
        description,
        img,
    }

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token,
        },
        body: JSON.stringify(user),
    }

    try {

        if (Object.values(user).some(field => field === '')) {
            throw new Error(`This is an empty field`);
        }

        const response = await fetch(`http://localhost:3030/data/movies`, option);

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (err) {
        alert(err.message);
    }
}