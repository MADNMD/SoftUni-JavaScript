function pieceOfPie(array, str1, str2) {

    const arrayFromPies = array;
    const firstPie = str1;
    const secondPie = str2;

    const stratIndex = arrayFromPies.indexOf(firstPie);
    const endIndex = arrayFromPies.indexOf(secondPie);
    const pieceOfPie = arrayFromPies.slice(stratIndex, endIndex + 1);
    return pieceOfPie;
}
pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);