import { showView } from "./util.js";
import { detailPage } from "./details.js";

const homeSection = document.getElementById('home-page');
const catalog = document.querySelector('.card-deck.d-flex.justify-content-center');

catalog.addEventListener('click', (event) => {
   event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
        const id = event.target.dataset.id;
        detailPage(id);
    }
});

export function homePage() {
    showView(homeSection);
    displayMovies();
}

async function displayMovies() {

    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMovie));// replaceChildren изтрива цялото съдъражание на cataloga и apped-ва новосъсдадените
    // филми, те трябва да се подадът като поредица(1,2,3) не като масив и за това позлваме 
    // spred(...) оператора.
}

function createMovie(movie) {

    const div = document.createElement('div');
    div.className = 'card mb-4';

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = movie.img;
    img.alt = 'Card image cap';
    img.width = '400';

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const h4 = document.createElement('h4');
    h4.className = 'card-title';
    h4.textContent = movie.title;

    const divCardFooter = document.createElement('div');
    divCardFooter.className = 'card-footer';

    const a = document.createElement('a');
    a.href = `/details/${movie._id}`;

    const detailsBtn = document.createElement('button');
    detailsBtn.dataset.id = movie._id;
    detailsBtn.type = 'button';
    detailsBtn.className = 'btn btn-info';
    detailsBtn.textContent = 'Details';

    divCardBody.appendChild(h4);
    a.appendChild(detailsBtn);
    divCardFooter.appendChild(a);
    div.appendChild(img);
    div.appendChild(divCardBody);
    div.appendChild(divCardFooter);

    return div;
}

async function getMovies() {

    try {
        const response = await fetch('http://localhost:3030/data/movies');

        if (response.ok !== true) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        alert(error);
    }
}

window.getMovies = getMovies;