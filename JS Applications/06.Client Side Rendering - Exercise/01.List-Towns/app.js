import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', onLoad);
const townList = document.getElementById('root');

function onLoad(event) {
    event.preventDefault();

    if (document.getElementById('towns').value !== '') {
        const towns = document.getElementById('towns').value.split(', ');
        const result = createList(towns);
        render(result, townList);
        document.getElementById('towns').value = '';
    }
}

const createList = (towns) => html`
    <ul>
        ${towns.map((town) => html`<li>${town}</li>`)}
    </ul>`