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
import { myPublicationsPage } from './views/myPublications.js';
import { registerPage } from './views/register.js';

export function navigationView(){

    const userData = getUserData();

    if(userData){
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
    }else{
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline';
    }
}

document.getElementById('logoutBtn').addEventListener('click', async(event) => {
    event.preventDefault();
    await logout();
    navigationView();
    page.redirect('/catalog');
})

page(middleware);
navigationView();
page.redirect('/catalog');
page('/home', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myFurniture', myPublicationsPage);
page.start();