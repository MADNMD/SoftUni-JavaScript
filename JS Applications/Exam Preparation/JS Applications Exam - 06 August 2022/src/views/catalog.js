import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../api/data.js';

const catalogTempleate = (offerts) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offerts.length === 0
    ? html`<h2>No offers yet.</h2>`
    : offerts.map(offert => html`
    <div class="offer">
        <img src=${offert.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${offert.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${offert.salary}</span></p>
        <a class="details-btn" href="/details/${offert._id}">Details</a>
    </div>
    `)
    }
</section>`;

export async function catalogPage(ctx) {

    const allOfferts = await getAllOffers();
    // console.log(allOfferts);
    ctx.render(catalogTempleate(allOfferts));
}