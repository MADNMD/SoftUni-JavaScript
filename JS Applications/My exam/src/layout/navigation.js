import { getUserData } from "../util/util.js";

export function navigationView() {

    const userData = getUserData();

    if (userData) {
        document.querySelector('.user').style.display = 'inline';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline';
    }
}