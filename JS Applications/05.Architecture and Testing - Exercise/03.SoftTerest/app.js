import './src/api/api.js';
import { showCatalog } from './src/views/catalog.js';
import { showCreate } from './src/views/create.js';
import { showDetails } from './src/views/details.js';
import { showHome } from './src/views/home.js';
import { showLogin } from './src/views/login.js';
import { showRegister } from './src/views/register.js';
import { logout } from './src/api/api.js';

const main = document.querySelector('main')

const links = {
    'homeLink': 'home',
    'getStardetLink': 'home',
    'loginLink': 'login',
    'registerLink': 'register',
    'createLink': 'create',
    'catalogLink': 'catalog',
    'detailsLink': 'details',
}

const views = {
    'home': showHome,
    'login': showLogin,
    'register': showRegister,
    'catalog': showCatalog,
    'create': showCreate,
    'details': showDetails,
}

const navigation = document.querySelector('nav');
navigation.addEventListener('click', onNavigation);

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    updateNav();
    goTo('home');
})

function onNavigation(event) {
    event.preventDefault();
    const name = links[event.target.id]; //В index.html файла слагам на всички <а> тагове в навигацията ID за да знам къде се натиска;
    console.log(name);                   // и това ID отговаря на някой от KVP от links обекта;
    goTo(name); // тук подавам името на секцията която исакм да се покаже;
}

function goTo(name, ...params) {
    const view = views[name]; //тук гледаме в обекта views и викаме дадената функция
    view(context, ...params); // тук view държи референция към извиканата функция и повада параметри
}

const context = {
    showSection,
    updateNav,
    goTo,
}

function showSection(name) {
    main.replaceChildren(name);
}

function updateNav() {
    //слагам класов user и guest в index.html файла;

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData !== null) {
        Array.from(navigation.querySelectorAll('.user')).forEach(el => el.style.display = 'block');
        Array.from(navigation.querySelectorAll('.guest')).forEach(el => el.style.display = 'none');
    } else {
        Array.from(navigation.querySelectorAll('.user')).forEach(el => el.style.display = 'none');
        Array.from(navigation.querySelectorAll('.guset')).forEach(el => el.style.display = 'block');
    }
}
updateNav()
// showHome(context);