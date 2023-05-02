import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { myBookPage } from './views/myBooks.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

const root = document.getElementById('site-content');

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.navigationView = navigationView;

    next();
}

export function navigationView(){
    const userData = getUserData();

    if(userData){
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    }else{
        document.getElementById('guest').style.display = 'inline';
        document.getElementById('user').style.display = 'none';
    }
}

document.getElementById('logoutBtn').addEventListener('click', (event) => {
    event.preventDefault();
    logout();
    navigationView();
    page.redirect('/catalog');
})

page(decorateContext);
page.redirect('/catalog');
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/addBook', createPage);
page('/myBooks', myBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
navigationView();
page.start();










// export const navigationView = () => {
//     const userView = document.getElementById('user');
//     const guestView = document.getElementById('guest');

//     if(localStorage.length === 0){
//         userView.style.display = 'none';
//         guestView.style.display = 'inline';
//     }else{
//         userView.style.display = 'inline';
//         guestView.style.display = 'none';
//     }
// }
// navigationView();