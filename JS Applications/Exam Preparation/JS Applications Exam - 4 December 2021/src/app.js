import { getUserData } from "./util.js";
import page from "../node_modules/page/page.mjs";
import { middleware } from "./middleware/middleware.js";
import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./auth/auth.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { seacrhPage } from "./views/search.js";

export function navigationView() {

    const userData = getUserData();

    if (userData) {
        document.querySelectorAll('.user')[0].style.display = 'inline';
        document.querySelectorAll('.user')[1].style.display = 'inline';
        document.querySelectorAll('.guest')[0].style.display = 'none';
        document.querySelectorAll('.guest')[1].style.display = 'none';
    } else {
        document.querySelectorAll('.user')[0].style.display = 'none';
        document.querySelectorAll('.user')[1].style.display = 'none';
        document.querySelectorAll('.guest')[0].style.display = 'inline';
        document.querySelectorAll('.guest')[1].style.display = 'inline';
    }
}

document.getElementById('logout').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    navigationView();
    page.redirect('/catalog');
})

page(middleware);
navigationView();
page.redirect('/home');
page('/home', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', seacrhPage);
page.start();
