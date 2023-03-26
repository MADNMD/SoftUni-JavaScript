import { render } from '../node_modules/lit-html/lit-html.js';
import { getRequets, postRequest } from './api.js';
import { dropdownTemplate } from './template.js';

async function drawOption() {
    const towns = await getRequets();
    // const sortedName = Object.values(towns).sort((a, b) => a.text.localeCompare(b.text));
    // render(dropdownTemplate(sortedName), document.querySelector('body'));
    render(dropdownTemplate(Object.values(towns)), document.querySelector('body'));
}

await drawOption();

document.querySelector('form').addEventListener('submit', onAdd);

async function onAdd(event){
    event.preventDefault();
     
    const textInput = document.getElementById('itemText');

    if(textInput.value === ''){
        return;
    }

    await postRequest({
        text: textInput.value,
    })
    drawOption();
    textInput.value = '';
}