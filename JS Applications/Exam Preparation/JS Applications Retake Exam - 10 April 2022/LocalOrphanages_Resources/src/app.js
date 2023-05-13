import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myPostPage } from './views/myPosts.js';
import { registerPage } from './views/register.js';

const root = document.getElementById('main-content');

function decorateContex(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.navigationView = navigationView;

    next();
}

export function navigationView() {

    const userData = getUserData();

    if (userData) {
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline';
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
page.redirect('/catalog');
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register/', registerPage);
page('/create', createPage);
page('/myPosts', myPostPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page.start();