import { render } from "../node_modules/lit-html/lit-html.js";
import { getRequets } from "./api.js";
import { tableTemplate } from "./template.js";

async function update(matchText) {
   const studentsInfo = Object.values(await getRequets());
   render(tableTemplate(studentsInfo,matchText), document.body);
}
await update();

document.querySelector('#searchBtn').addEventListener('click', onClick);

async function onClick() {
   const rows = Array.from(document.querySelectorAll('tbody tr'));
   const searchField = document.getElementById('searchField')
   const matchText = searchField.value.toLowerCase();

   rows.forEach(row => {
      row.removeAttribute('class', 'select');
      // const rowText = row.textContent.toLowerCase();

   //    if (rowText.includes(matchText)) {
   //       row.setAttribute('class', 'select');
   //    }
   });
   searchField.value = '';
   update(matchText);
}
