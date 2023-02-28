import { homePage } from "./home.js";
import { showView } from "./util.js";
import { updateNavigation } from "./util.js";

const loginSection = document.getElementById('form-login');
const form = loginSection.querySelector('form').addEventListener('submit', onLogin)

export function loginPage() {
    showView(loginSection);
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);
    event.target.reset() //  зачистаме всички полета;
    updateNavigation(); // викаме функцията да update-не навигацията;
    homePage(); // викаме функцията да ни върне първоначакния изглед;
}

async function login(email, password) {
    try {

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }

        const response = await fetch('http://localhost:3030/users/login', option);

        if (response.ok !== true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const user = await response.json();

        const userData = {
            userName: user.userName,
            email: user.email,
            id: user._id,
            token: user.accessToken,
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));

    } catch (error) {
        alert(error.message);
        throw error; // прехвърлям грешката от ред 18  await login(email, password) за да не може страницата да направи redirect;
    }
}