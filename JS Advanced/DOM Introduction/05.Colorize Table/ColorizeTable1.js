function colorize() {

    const rows = [...document.querySelectorAll('tr:nth-child(even)')];

    rows.forEach(element => element.style.background = 'teal');

}