import { render } from '../node_modules/lit-html/lit-html.js';
import { getBooks } from './api.js';
import { tebleRow } from './template.js';

export async function loadBooks() {

    const tableBody = document.querySelector('tbody');

    const books = await getBooks();
    // Object.entries(books).map(book => console.log(book[1]))
    render(tebleRow(Object.entries(books)), tableBody);
}