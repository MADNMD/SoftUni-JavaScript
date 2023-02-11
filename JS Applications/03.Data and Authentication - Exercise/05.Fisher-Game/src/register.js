window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    document.getElementById('register').classList.add('active');

    document.getElementById('register-form').addEventListener('submit', onRegister);
    const errorP = document.querySelector('.notification');

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('rePass');

        if (password !== repeatPassword) {
            errorP.textContent = 'Incorect Password';
            return
        }
        console.log(errorP);
        const option = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }

        registerRequest(option);
    }

    async function registerRequest(option) {

        try {
            const response = await fetch(`http://localhost:3030/users/register`, option);
            const data = await response.json();

            if (response.ok !== true) {
                const err = await response.json();
                throw new Error(err.message);
            }

            sessionStorage.setItem('newUser', JSON.stringify(data));
            window.location = './index.html';
        } catch (error) {
            alert(error.message);
        }
    }
});