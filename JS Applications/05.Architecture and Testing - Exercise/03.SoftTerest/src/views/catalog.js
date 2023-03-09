import { getAllIdeas } from "../api/data.js";
const section = document.getElementById('dashboard-holder');
section.remove();

export function showCatalog(context){
    context.showSection(section);
    loadIdeas();
}

async function loadIdeas(){
    let ideas = await getAllIdeas();
   
    if(ideas.length === 0){
        const element = document.createElement('h1');
        element.textContent = 'No ideas yet! Be the first on :)';
        section.replaceChildren(element);
    }else{
        const fragment = document.createDocumentFragment();
        ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i));
        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea){
    const divElement = document.createElement('div');
    divElement.className = 'card overflow-hidden current-card detail';
    divElement.style.width = '20rem';
    divElement.style.height = '18rem';

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const pText = document.createElement('p');
    pText.className = 'card-text';
    pText.textContent = idea.title;

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = idea.img;
    img.alt = 'Card image cap';

    const a = document.createElement('a');
    a.dataset.id = idea._id;
    a.className = 'btn';
    a.href = '';
    a.textContent = 'Details';

    divCardBody.appendChild(pText);
    divElement.appendChild(divCardBody);
    divElement.appendChild(img);
    divElement.appendChild(a);

    return divElement;
}