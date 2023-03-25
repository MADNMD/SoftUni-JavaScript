import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const template = (towns, match) =>
   html`
<article>
   <div id="towns">
      <ul>
         ${towns.map(town => createLiElement(town, match))};
      </ul>
   </div>
   <input type="text" id="searchText" />
   <button @click=${search}>Search</button>
   <div id="result">${counterMatches(towns, match)}</div>
</article>`



const createLiElement = (name, match) =>
   html`
<li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>`


const body = document.body;
update();

function update(match = '') {
   const result = template(towns, match);
   render(result, body)
}

function search() {
   const match = document.getElementById('searchText').value;
   update(match);
}

function counterMatches(towns, match) {
   const matches = towns.filter(town => match && town.toLowerCase().includes(match.toLowerCase())).length;
   return `${matches} matches found`;
}