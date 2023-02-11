window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    document.getElementById('login').classList.add('active');

    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', onLogin);
});

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const option = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }

        const response = await fetch('http://localhost:3030/users/login', option);

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken,
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = ('./index.html');

    } catch (error) {
        alert(error.message);
    }
}