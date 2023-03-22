import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const root = document.getElementById('container');

function decorateContex(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.navigationView = navigationView;

    next();
}

export function navigationView() {

    const userData = getUserData();

    if (userData) {
        document.getElementById('logout').style.display = 'inline';
        document.getElementById('welcome-user').style.display = 'inline';
        document.getElementById('welcome-user').textContent = `Welcome, ${userData.email}`;
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'none';
    } else {
        document.getElementById('register').style.display = 'inline';
        document.getElementById('login').style.display = 'inline';
        document.getElementById('welcome-user').style.display = 'none';
        document.getElementById('logout').style.display = 'none';

    }
}

document.getElementById('logout').addEventListener('click', async (event) => {
    event.preventDefault();
    logout();
    navigationView();
    page.redirect('/catalog');
})

page(decorateContex);
page.redirect('/catalog');
navigationView();
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page.start();