import { logout } from "./auth/auth.js";
import { navigationView } from "./layout/navView.js";
import { middleware } from "./middleware/render.js";
import page from "./node_modules/page/page.mjs";
import { browsePage } from "./views/browse.js";
import { createPage } from "./views/create.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { myTeamsPage } from "./views/myTeam.js";
import { registerPage } from "./views/register.js";

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    navigationView();
    page.redirect('/home');
})

page(middleware);
navigationView();
page.redirect('/home');
page('/home', homePage);
page('/browseTeams', browsePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/myTeams', myTeamsPage);
page.start();