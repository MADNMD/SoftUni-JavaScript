import page from "../node_modules/page/page.mjs";
import { logout } from "./auth/auth.js";
import { navigationView } from "./layout/navigation.js";
import { middleware } from "./middleware/render.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";

document.getElementById('logoutBtn').addEventListener('click', async(event) => {
    event.preventDefault();
    await logout();
    navigationView();
    page.redirect('/home');
})

page(middleware);
page.redirect('/home');
navigationView();
page('/home', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage);
page.start();