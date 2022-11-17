function colorize() {
    const rows = document.querySelectorAll('tr');
    const rowsL = rows.length;

    for (let i = 1; i < rowsL; i += 2) {
        rows[i].style.background = 'teal';
    }
}