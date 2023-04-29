import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { loginPage } from './views/login.js';
import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

const root = document.getElementById('site-content');

function decorateContex(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.navigationView = navigationView;

    next();
}

export function navigationView() {
        const userData = getUserData();

    if (userData) {
        document.querySelector('.user').style.display = 'inline';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline';
    }
}

document.getElementById('logout').addEventListener('click', async (event) => {
    event.preventDefault();
    logout();
    navigationView();
    page.redirect('/catalog');
})

page(decorateContex);
navigationView();
page.redirect('/home');
page('/home', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page.start();