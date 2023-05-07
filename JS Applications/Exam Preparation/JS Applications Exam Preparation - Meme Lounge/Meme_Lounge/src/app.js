import page from "../node_modules/page/page.mjs";
import { logout } from "./auth/auth.js";
import { navigatinView } from "./layout/navigation.js";
import { middleware } from "./middleware/render.js";
import { allMemesPage } from "./views/allMemes.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { myMemesPage } from "./views/myMemes.js";
import { registerPage } from "./views/register.js";

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    navigatinView();
    page.redirect('/home');
})

page(middleware);
page.redirect('/home');
navigatinView();
page('/home', homePage);
page('/allMemes', allMemesPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/myProfile', myMemesPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page.start();