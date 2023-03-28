import { render } from '../node_modules/lit-html/lit-html.js';
import { tableBody, formTemplate, editFormTemplate } from './template.js';

render([tableBody, formTemplate, editFormTemplate], document.body)














// import { getRequest, postRequest, putRequest } from './api.js';

// function update(){
//     render(tableBody, document.body);
// }
// update();

// document.getElementById('loadBooks').addEventListener('click', loadBooks);

// async function loadBooks(){
//     console.log(await getRequest());
// }