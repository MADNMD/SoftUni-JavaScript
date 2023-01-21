function sumTable() {

    const tableRows = Array.from(document.getElementsByTagName('tr'));
    let sum = 0;
    const reuslt = document.getElementById('sum');

    for (let i = 1; i < tableRows.length - 1; i++) {

        const productPrice = Array.from(tableRows[i].children);
        sum += Number(productPrice[1].textContent);
    }
    reuslt.textContent = sum;
}