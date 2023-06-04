import page from "../node_modules/page/page.mjs";
import { logout } from "./auth/auth.js";
import { navigationViews } from "./layout/navigation.js";
import { middleware } from "./middleware/render.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { profilePage } from "./views/profile.js";
import { registerPage } from "./views/register.js";

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    navigationViews();
    page.redirect('/home');
})

page(middleware);
page.redirect('/home');
navigationViews();
page('/home', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/profile', profilePage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page.start();