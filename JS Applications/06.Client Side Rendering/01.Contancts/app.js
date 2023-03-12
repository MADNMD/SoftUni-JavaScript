import { html, render } from '../node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js'


const contactList = document.getElementById('contacts');

const contactCard = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button @click=${onDetails} class="detailsBtn">Details</button>
        <div class="details" id=${contact.id}>
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>`;

render(contacts.map(contactCard), contactList);

function onDetails(event) {
    const parent = event.target.parentElement;
    const detailsCard = parent.querySelector('.details');
    console.log(detailsCard);
    if (detailsCard.style.display === 'block') {
        detailsCard.style.display = 'none';
    } else{
        detailsCard.style.display = 'block';
    }
}