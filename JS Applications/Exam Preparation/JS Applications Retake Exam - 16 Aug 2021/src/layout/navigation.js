import { getUserData } from "../util/util.js";

export function navigationView() {

    const userData = getUserData();

    if (userData) {
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline';
    }

}