import page from '../node_modules/page/page.mjs';
import { logout } from './auth/auth.js';
import { middleware } from './middleware/middleware.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myCarListPage } from './views/myCarList.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';

export function navigatinView() {

    const userData = getUserData();

    if (userData) {
        document.getElementById('profile').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('username').textContent = `Welcome ${userData.username}`;
    } else {
        document.getElementById('guest').style.display = 'inline';
        document.getElementById('profile').style.display = 'none';
    }
}

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    navigatinView();
    page.redirect('/home');
})

page(middleware);
navigatinView();
page.redirect('/home');
page('/home', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/myList', myCarListPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage);
page.start();