import { html } from "../node_modules/lit-html/lit-html.js";
import { loadBooks } from "./catalog.js";
import { getFormData } from "./create.js"
import { deleteBook } from "./delete.js";
import { showEditForm } from "./edit.js"

export const tableBody = html`
    <body>
        <button id="loadBooks" @click=${loadBooks}>LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
    
            </tbody>
        </table>
    </body>`;

export const formTemplate = html`
    <form @submit=${getFormData} id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

export const editFormTemplate = html`
    <form id="edit-form" style="display: none">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`;

export const tebleRow = (books) => {
    return html`
    ${books.map((book) => html`
    <tr id=${book[0]}>
        <td>${book[1].title}</td>
        <td>${book[1].author}</td>
        <td>
            <button @click=${showEditForm}>Edit</button>
            <button @click=${deleteBook}>Delete</button>
        </td>
    </tr>`)}`
}