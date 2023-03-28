import { deleteBookById } from "./api.js";
import { loadBooks } from "./catalog.js";

export async function deleteBook(event){
    event.preventDefault();

    const id = event.target.parentElement.parentElement.id;

    await deleteBookById(id);

    loadBooks();
}