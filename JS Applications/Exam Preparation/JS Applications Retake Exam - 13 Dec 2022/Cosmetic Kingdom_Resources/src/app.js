import { getUserData } from "./util.js";
import page from "../node_modules/page/page.mjs";
import { middleware } from "./middleware/middleware.js";
import { logout } from "./auth/auth.js";
import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

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

document.getElementById('logoutBtn').addEventListener('click', async(event) => {
    event.preventDefault();
    logout();
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
page.start();
