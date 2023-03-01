import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { updateNavigation } from "./util.js";

const routers = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logoutPage,
    '/register': registerPage,
    '/create': createPage,
};

document.querySelector('nav').addEventListener('click', onNavigate) //слагаме addEventListener на цялата навигация за да разберем къде,
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate)

function onNavigate(event) {
    if (event.target.tagName === 'A' && event.target.href) { //е кликнал потребителя и взимаме линка 
        event.preventDefault();
        const url = new URL(event.target.href);

        const view = routers[url.pathname];
        if (typeof view === 'function') {
            view();
        }
    }
}

async function logoutPage() { //logout-ваме потребителя;
    sessionStorage.clear(); // чистим текущата сесия;
    updateNavigation(); // и викаме функцията която показва section-те в navBara;
}
updateNavigation()// викаме фукцията преди да се е заредил homePage() за да може user-a види правилните бутони в навигацията;
homePage(); // викаме функцията homePage и приложението стартира с каталога