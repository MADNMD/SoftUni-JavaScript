import { html } from '../node_modules/lit-html/lit-html.js';

const template = (towns) => {
    html`
    <article>
        <div id="towns">
            ${towns.map(town => html`<li>${town}</li>`)}
        </div>
        <input type="text" id="searchText" />
        <button>Search</button>
        <div id="result"></div>
    </article>`
}

export { template };