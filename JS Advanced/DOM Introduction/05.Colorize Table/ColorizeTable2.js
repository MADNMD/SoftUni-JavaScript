function colorize() {

    const tableRows = Array.from(document.getElementsByTagName('tr'));

    tableRows.forEach((row, index) => {
        if ((index + 1) % 2 === 0) {
            row.style.background = 'Teal';
        }
    })
}