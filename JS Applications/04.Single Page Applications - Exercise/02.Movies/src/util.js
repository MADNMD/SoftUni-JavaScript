const views = Array.from(document.querySelectorAll('.view-section'));
const userNav = document.querySelectorAll('.user');
const guestNav = document.querySelectorAll('.guest');
const UserEmailNav = document.getElementById('welcome-msg');

function hideAll() { // с тази функция скривам всички html  елементи от страницата
    views.forEach(section => section.style.display = 'none');
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

export function updateNavigation() { // export-ваме функцията която показва полетата в navigation bar
    // и трябва да я import-нем в login.js файла 
    const user = JSON.parse(sessionStorage.getItem('userData')); // проверяваме дали има логнат user 
    // ако има връща true, ако няма връща null дори и когато е с JSON.parse();
    if (user) {
        userNav.forEach(section => section.style.display = 'inline-block');
        guestNav.forEach(section => section.style.display = 'none');
        UserEmailNav.textContent = `Welcome, ${user.email}`;
    } else {
        userNav.forEach(section => section.style.display = 'none');
        guestNav.forEach(section => section.style.display = 'inline-block');
    }
}