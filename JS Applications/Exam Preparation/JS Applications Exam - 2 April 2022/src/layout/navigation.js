import { getUserData } from "../util/util.js";

export function navigationView() {

    const userData = getUserData();

    if (userData) {
        document.querySelectorAll('.user')[0].style.display = 'inline';
        document.querySelectorAll('.user')[1].style.display = 'inline';
        document.querySelectorAll('.guest')[0].style.display = 'none';
        document.querySelectorAll('.guest')[1].style.display = 'none';
    } else {
        document.querySelectorAll('.user')[0].style.display = 'none';
        document.querySelectorAll('.user')[1].style.display = 'none';
        document.querySelectorAll('.guest')[0].style.display = 'inline';
        document.querySelectorAll('.guest')[1].style.display = 'inline';
    }
}